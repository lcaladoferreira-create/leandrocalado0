import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-24 overflow-hidden border-b border-zinc-900">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-start">
        {/* Monospaced Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-8"
        >
          <Terminal size={14} className="text-zinc-500" />
          <span>Leandro Calado • Systems Architect & Author</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-zinc-50 leading-[1.05] mb-8 max-w-4xl"
        >
          The Blueprint for the <span className="text-zinc-500 italic">AI-Native</span> Architect.
        </motion.h1>

        {/* Sub headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-light"
        >
          This is not content for spectators. This is the definitive technical library for professionals who ship systems, automate work, and build capability. From Data Engineering to MCP protocols—implementation-grade knowledge to force-multiply your career.
        </motion.p>

        {/* Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a href="#library" className="group flex items-center justify-center gap-3 bg-zinc-50 text-zinc-950 px-8 py-4 font-medium hover:bg-zinc-200 transition-colors duration-200 w-full sm:w-auto">
            Access the Vault
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex flex-col justify-center text-sm font-mono text-zinc-500">
            <span>116 Technical Titles Published</span>
            <span>3,600+ Engineers Upgraded</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
