import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 dark:bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-400 to-amber-600 grid place-items-center text-white shadow-lg shadow-orange-500/30">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold tracking-tight text-white">Vibe AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white">Sign in</button>
            <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-black hover:brightness-110 shadow-lg shadow-orange-500/30">Get Started</button>
          </div>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white" onClick={() => setOpen((o) => !o)}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded-md text-white/80 hover:text-white">Features</a>
            <a href="#how" className="block px-2 py-2 rounded-md text-white/80 hover:text-white">How it works</a>
            <a href="#pricing" className="block px-2 py-2 rounded-md text-white/80 hover:text-white">Pricing</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white border border-white/10">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-black hover:brightness-110">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
