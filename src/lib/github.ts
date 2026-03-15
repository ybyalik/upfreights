/**
 * Shared GitHub API helpers for committing blog.ts changes.
 * Used by both the Outrank webhook and the admin CRUD APIs.
 */

const GITHUB_OWNER = 'ybyalik';
const GITHUB_REPO = 'upfreights';
const GITHUB_BRANCH = 'main';
const BLOG_FILE_PATH = 'src/lib/data/blog.ts';

export const MAX_RETRIES = 3;

export async function githubApi(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN not configured');

  const url = endpoint.startsWith('https://')
    ? endpoint
    : `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`GitHub API ${response.status}: ${error}`);
  }

  return response;
}

export async function fetchCurrentBlogFile(): Promise<{ content: string; commitSha: string }> {
  // Get file metadata (blob SHA) — works even for files >1MB
  const metaRes = await githubApi(`/contents/${BLOG_FILE_PATH}?ref=${GITHUB_BRANCH}`);
  const meta = await metaRes.json();

  // Get actual content via Git Blob API (supports up to 100MB)
  const blobRes = await githubApi(`/git/blobs/${meta.sha}`);
  const blob = await blobRes.json();
  const content = Buffer.from(blob.content, 'base64').toString('utf-8');

  // Get current commit SHA on the branch
  const refRes = await githubApi(`/git/ref/heads/${GITHUB_BRANCH}`);
  const ref = await refRes.json();

  return { content, commitSha: ref.object.sha };
}

export async function commitBlogFile(
  newContent: string,
  parentCommitSha: string,
  message: string
): Promise<string> {
  // Create a new blob
  const blobRes = await githubApi('/git/blobs', {
    method: 'POST',
    body: JSON.stringify({
      content: Buffer.from(newContent).toString('base64'),
      encoding: 'base64',
    }),
  });
  const newBlob = await blobRes.json();

  // Get the parent commit's tree SHA
  const commitRes = await githubApi(`/git/commits/${parentCommitSha}`);
  const parentCommit = await commitRes.json();

  // Create a new tree
  const treeRes = await githubApi('/git/trees', {
    method: 'POST',
    body: JSON.stringify({
      base_tree: parentCommit.tree.sha,
      tree: [{ path: BLOG_FILE_PATH, mode: '100644', type: 'blob', sha: newBlob.sha }],
    }),
  });
  const newTree = await treeRes.json();

  // Create a new commit
  const newCommitRes = await githubApi('/git/commits', {
    method: 'POST',
    body: JSON.stringify({ message, tree: newTree.sha, parents: [parentCommitSha] }),
  });
  const newCommit = await newCommitRes.json();

  // Update the branch ref
  await githubApi(`/git/refs/heads/${GITHUB_BRANCH}`, {
    method: 'PATCH',
    body: JSON.stringify({ sha: newCommit.sha }),
  });

  return newCommit.sha;
}

export function escapeTemplateString(str: string): string {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
}

const HELPER_MARKER = '// Helper function to get a blog post by slug';

export function extractHelperFunctions(fileContent: string): string {
  const idx = fileContent.indexOf(HELPER_MARKER);
  if (idx !== -1) return fileContent.slice(idx);

  return `// Helper function to get a blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Helper function to get all blog slugs for static generation
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

// Helper function to get related posts
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}

// Helper function to get paginated posts
export function getPaginatedPosts(page: number = 1, perPage: number = 12) {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogPosts.length / perPage);

  return {
    posts: paginatedPosts,
    currentPage: page,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}
`;
}

export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  category?: string;
  tags?: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime?: string;
  image?: string;
  featured?: boolean;
  metaTitle?: string;
  metaDescription?: string;
}

export function generatePostEntry(post: BlogPostData): string {
  const sq = (s: string) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const lines: string[] = [
    `  {`,
    `    id: '${sq(post.id)}',`,
    `    slug: '${sq(post.slug)}',`,
    `    title: \`${escapeTemplateString(post.title)}\`,`,
    `    excerpt: \`${escapeTemplateString(post.excerpt)}\`,`,
    `    content: \`${escapeTemplateString(post.content)}\`,`,
    `    metaTitle: \`${escapeTemplateString(post.metaTitle || post.title)}\`,`,
    `    metaDescription: \`${escapeTemplateString(post.metaDescription || post.excerpt.slice(0, 160))}\`,`,
    `    author: '${sq(post.author || 'UpFreights Team')}',`,
    `    publishedAt: '${sq(post.publishedAt)}',`,
  ];

  if (post.updatedAt) lines.push(`    updatedAt: '${sq(post.updatedAt)}',`);
  if (post.category) lines.push(`    category: '${sq(post.category)}',`);
  if (post.tags && post.tags.length > 0) {
    lines.push(`    tags: [${post.tags.map(t => `'${sq(t)}'`).join(', ')}],`);
  }
  if (post.featured) lines.push(`    featured: true,`);
  lines.push(`    image: '${sq(post.image || '')}',`);
  lines.push(`  }`);

  return lines.join('\n');
}

/** Parse the raw post entries from blog.ts into a Map of id → raw source string */
export function parsePostEntries(fileContent: string): Map<string, string> {
  const posts = new Map<string, string>();

  // Find all post boundaries by locating each "id: '...'" occurrence
  // and working backwards to find the opening { and forwards to find the closing }
  const idRegex = /id:\s*'([^']+)'/g;
  const ids: { id: string; index: number }[] = [];
  let m;
  while ((m = idRegex.exec(fileContent)) !== null) {
    ids.push({ id: m[1], index: m.index });
  }

  for (let i = 0; i < ids.length; i++) {
    // Find the opening { before this id
    const searchStart = i === 0 ? 0 : ids[i - 1].index;
    let braceStart = fileContent.lastIndexOf('{', ids[i].index);
    // Make sure the brace is after the previous post's id
    while (braceStart > 0 && braceStart < searchStart) {
      braceStart = fileContent.lastIndexOf('{', braceStart - 1);
    }

    // Find the end: either just before the next post's opening { or before ];
    let end: number;
    if (i < ids.length - 1) {
      // Find the { before the next id
      end = fileContent.lastIndexOf('{', ids[i + 1].index);
      // Go back to include the }, or },,
      const segment = fileContent.slice(braceStart, end);
      const lastBrace = segment.lastIndexOf('}');
      end = braceStart + lastBrace + 1;
    } else {
      // Last post — find the closing } before ];
      const closingArray = fileContent.indexOf('];', ids[i].index);
      const segment = fileContent.slice(braceStart, closingArray);
      const lastBrace = segment.lastIndexOf('}');
      end = braceStart + lastBrace + 1;
    }

    let chunk = fileContent.slice(braceStart, end).trim();
    // Remove trailing comma(s)
    chunk = chunk.replace(/,+$/, '');
    // Normalize to standard indentation
    chunk = '  ' + chunk.replace(/^\s*\{/, '{').replace(/\}\s*$/, '}');
    if (!chunk.startsWith('  {')) chunk = '  {' + chunk.slice(chunk.indexOf('{') + 1);

    posts.set(ids[i].id, chunk);
  }

  return posts;
}

/** Extract a field value from a raw post entry string.
 *  Handles both single-quote ('value') and backtick (`value`) formats.
 *  For backtick strings, properly handles escaped backticks inside content. */
export function extractField(raw: string, fieldName: string): string {
  // Try single-quote format first: field: 'value'
  const sqRegex = new RegExp(fieldName + ":\\s*'([^']*)'");
  const sqMatch = raw.match(sqRegex);
  if (sqMatch) return sqMatch[1];

  // Try backtick format: field: `value`
  // Find the opening backtick after the field name
  const fieldIdx = raw.indexOf(fieldName + ':');
  if (fieldIdx === -1) return '';

  const afterField = raw.slice(fieldIdx + fieldName.length + 1);
  const btIdx = afterField.indexOf('`');
  if (btIdx === -1) return '';

  // Walk through the string to find the unescaped closing backtick
  const str = afterField.slice(btIdx + 1);
  let result = '';
  let i = 0;
  while (i < str.length) {
    if (str[i] === '\\' && i + 1 < str.length) {
      // Escaped character — include the next char literally
      result += str[i + 1];
      i += 2;
    } else if (str[i] === '`') {
      // Unescaped closing backtick — done
      break;
    } else {
      result += str[i];
      i++;
    }
  }

  return result;
}

/** Build the full blog.ts file content from raw post entries */
export function buildBlogFileContent(postEntries: Map<string, string>, helperFunctions: string): string {
  const postsArray = Array.from(postEntries.values()).join(',\n');
  const arrayContent = postsArray ? `\n${postsArray},\n` : '\n';
  return `import { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [${arrayContent}];

${helperFunctions}`;
}
