"use client";

import { useEffect } from 'react';

export default function ThemeProvider() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (isDark: boolean) => {
      root.classList.toggle('dark', isDark);
      root.classList.toggle('light', !isDark);
      root.style.colorScheme = isDark ? 'dark' : 'light';
      root.classList.add('theme-transition');
      window.setTimeout(() => root.classList.remove('theme-transition'), 280);
    };

    applyTheme(media.matches);

    const onChange = (event: MediaQueryListEvent) => applyTheme(event.matches);
    media.addEventListener?.('change', onChange);

    return () => {
      media.removeEventListener?.('change', onChange);
    };
  }, []);

  return null;
}
