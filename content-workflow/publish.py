#!/usr/bin/env python3
"""Saves a finished article to content-workflow/out/<slug>.json and .md. Nothing goes to the live site or the blog
database here: the owner approves each article first, then it is put on the site by hand.
Usage (from the repo root): python3 content-workflow/publish.py <article.json> <article.md>"""
import sys, json, os, shutil
a = json.load(open(sys.argv[1]))
out = os.path.join('content-workflow', 'out'); os.makedirs(out, exist_ok=True)
json.dump(a, open(os.path.join(out, a['slug'] + '.json'), 'w'), indent=2, ensure_ascii=False)
shutil.copy(sys.argv[2], os.path.join(out, a['slug'] + '.md'))
print('saved', a['slug'], 'for review (not published)', file=sys.stderr)
print(json.dumps({"slug": a["slug"]}))
