import { NextRequest, NextResponse } from 'next/server';
import { githubApi } from '@/lib/github';

export const maxDuration = 30;

const GITHUB_BRANCH = 'main';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validate file type
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
    if (!allowed.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    // Validate file size (5MB max)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'File must be under 5MB' }, { status: 400 });
    }

    // Generate unique filename
    const ext = file.name.split('.').pop() || 'png';
    const filename = `blog-${Date.now()}.${ext}`;
    const filePath = `public/images/blog/${filename}`;

    // Read file as base64
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64Content = buffer.toString('base64');

    // Get current commit SHA
    const refRes = await githubApi(`/git/ref/heads/${GITHUB_BRANCH}`);
    const ref = await refRes.json();
    const parentSha = ref.object.sha;

    // Create blob
    const blobRes = await githubApi('/git/blobs', {
      method: 'POST',
      body: JSON.stringify({ content: base64Content, encoding: 'base64' }),
    });
    const blob = await blobRes.json();

    // Get parent tree
    const commitRes = await githubApi(`/git/commits/${parentSha}`);
    const parentCommit = await commitRes.json();

    // Create tree with new file
    const treeRes = await githubApi('/git/trees', {
      method: 'POST',
      body: JSON.stringify({
        base_tree: parentCommit.tree.sha,
        tree: [{ path: filePath, mode: '100644', type: 'blob', sha: blob.sha }],
      }),
    });
    const tree = await treeRes.json();

    // Create commit
    const newCommitRes = await githubApi('/git/commits', {
      method: 'POST',
      body: JSON.stringify({
        message: `blog: upload image ${filename}`,
        tree: tree.sha,
        parents: [parentSha],
      }),
    });
    const newCommit = await newCommitRes.json();

    // Update ref
    await githubApi(`/git/refs/heads/${GITHUB_BRANCH}`, {
      method: 'PATCH',
      body: JSON.stringify({ sha: newCommit.sha }),
    });

    const imageUrl = `/images/blog/${filename}`;

    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
