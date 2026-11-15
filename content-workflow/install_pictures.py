#!/usr/bin/env python3
"""Copies an article's finished pictures into content-workflow/out/<slug>-pictures/ for review.
They go into public/ only when the article is approved. Usage: install_pictures.py <pictures.json> <slug>"""
import sys, json, os, shutil
pj = sys.argv[1]; slug = sys.argv[2]
base = os.path.dirname(pj); src = os.path.join(base, 'pictures') if os.path.isdir(os.path.join(base, 'pictures')) else base; dst = os.path.join('content-workflow', 'out', slug + '-pictures'); os.makedirs(dst, exist_ok=True)
for f in os.listdir(src):
    if f.lower().endswith(('.webp', '.jpg', '.jpeg', '.png')): shutil.copy(os.path.join(src, f), dst)
shutil.copy(pj, os.path.join(dst, 'pictures.json'))
print(json.dumps({"installed": dst}))
