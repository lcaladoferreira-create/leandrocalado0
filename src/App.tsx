import { Hero } from './components/Hero';
import { Agitation } from './components/Agitation';
import { Library } from './components/Library';
import { ValueAnchoring } from './components/ValueAnchoring';
import { Authority } from './components/Authority';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-white">
      <main>
        <Hero />
        <Agitation />
        <Library />
        <ValueAnchoring />
        <Authority />
      </main>
      
      <footer className="py-12 px-6 border-t border-zinc-900 text-center text-zinc-500 text-sm font-mono uppercase tracking-widest">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Leandro Calado. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://leandrocalado.jusbrasil.com.br/" target="_blank" rel="noreferrer" className="hover:text-zinc-300">Jusbrasil</a>
            <a href="https://leandrocaladoferreira.medium.com/" target="_blank" rel="noreferrer" className="hover:text-zinc-300">Medium</a>
            <a href="https://www.linkedin.com/in/lcaladoferreira/" target="_blank" rel="noreferrer" className="hover:text-zinc-300">LinkedIn</a>
            <a href="https://github.com/lcaladoferreira" target="_blank" rel="noreferrer" className="hover:text-zinc-300">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
