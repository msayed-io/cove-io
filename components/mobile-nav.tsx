'use client';
import { useState } from 'react';
import { nav } from '../lib/content';
export function MobileNav({ repo }: { repo: string }) { const [open, setOpen] = useState(false); return <div className="mobile-nav"><button className="menu-button" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>{open && <div className="mobile-menu"><nav aria-label="تنقل الهاتف">{nav.map(item => <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav><a href={repo} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>}</div>; }
