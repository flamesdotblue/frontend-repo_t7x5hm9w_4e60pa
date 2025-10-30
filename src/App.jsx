import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Flow3D from './components/Flow3D';
import DashboardPreview from './components/DashboardPreview';
import UseCasesAndTech from './components/UseCasesAndTech';
import { Sun, MoonStar } from 'lucide-react';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-neutral-50 text-neutral-800 transition-colors dark:bg-neutral-950 dark:text-white">
        {/* Top nav */}
        <header className="fixed left-0 right-0 top-0 z-40 mx-auto flex max-w-7xl items-center justify-between rounded-b-2xl border border-white/10 bg-white/60 p-3 backdrop-blur dark:bg-neutral-900/60">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 shadow-[0_0_24px_6px_rgba(124,58,237,0.55)]" />
            <span className="bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-lg font-semibold text-transparent">CommentLens</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/60 px-3 py-2 text-sm backdrop-blur hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-4 w-4 text-amber-300" /> : <MoonStar className="h-4 w-4 text-violet-400" />}
              <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'} mode</span>
            </button>
          </div>
        </header>

        <main className="pt-16">
          <Hero />
          <Flow3D />
          <DashboardPreview />
          <UseCasesAndTech />
        </main>

        <footer className="border-t border-white/10 bg-neutral-900/40 py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} CommentLens. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
