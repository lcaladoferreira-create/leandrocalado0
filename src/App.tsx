import { Hero } from './components/Hero';
import { Agitation } from './components/Agitation';
import { Library } from './components/Library';
import { ValueAnchoring } from './components/ValueAnchoring';
import { Authority } from './components/Authority';
import { TopNav } from './components/TopNav';
import { PreferencesProvider } from './contexts/PreferencesContext';

export default function App() {
  return (
    <PreferencesProvider>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-black dark:selection:text-white transition-colors duration-300">
        <TopNav />
        <main className="pt-14">
          <Hero />
          <Agitation />
          <Library />
          <ValueAnchoring />
          <Authority />
        </main>
        
        <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-900 text-center text-zinc-500 text-sm font-mono uppercase tracking-widest transition-colors duration-300">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Leandro Calado. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://leandrocalado.jusbrasil.com.br/" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-300">Jusbrasil</a>
              <a href="https://leandrocaladoferreira.medium.com/" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-300">Medium</a>
              <a href="https://www.linkedin.com/in/lcaladoferreira/" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-300">LinkedIn</a>
              <a href="https://github.com/lcaladoferreira" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-300">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </PreferencesProvider>
  );
}
