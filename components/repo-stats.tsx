'use client';
import { useEffect, useState } from 'react';
export function RepoStats() { const [stars, setStars] = useState<number | null>(null); useEffect(() => { fetch('/api/repo-stats').then(r => r.ok ? r.json() : Promise.reject()).then(d => setStars(Number(d.stars) || 0)).catch(() => setStars(null)); }, []); return <span className="repo-stat"><b>{stars === null ? '·' : stars.toLocaleString('en-US')}</b><small>نجمة على GitHub</small></span>; }
