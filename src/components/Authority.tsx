import { motion } from "motion/react";
import { ShieldCheck, BookOpen, Layers, TerminalSquare } from "lucide-react";

export function Authority() {
  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left Column: Title & Philosophy */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
            Leandro Calado
          </h2>
          <h3 className="text-xl text-zinc-400 font-light mb-8">
            The Engineer Who Puts AI Agents to Work For You.
          </h3>
          <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
            <p>
              Leandro operates at the rare intersection of heavy technical execution and rapid knowledge deployment. With over six years in Data Engineering and architecture across AWS, Azure, and Databricks, his systems thinking translates raw theory into deployable code.
            </p>
            <p>
              Holding credentials from Johns Hopkins (Agentic AI) and an MBA in Data Science from USP, his approach is fundamentally multidisciplinary. He bypasses the hype cycle to deliver what matters: autonomous agents, robust ETL pipelines, and high-ROI automated workflows.
            </p>
            <p>
              He moves fast. 116 published technical titles. Over 3,600 units deployed into the hands of working professionals. 
            </p>
          </div>
        </div>

        {/* Right Column: Credentials Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border border-zinc-800 bg-zinc-900/30">
            <ShieldCheck size={24} className="text-zinc-500 mb-4" />
            <h4 className="text-white font-medium tracking-tight mb-2">Technical Rigor</h4>
            <p className="text-sm font-light text-zinc-400">USP MBA Data Science. Johns Hopkins Agentic AI certified.</p>
          </div>
          <div className="p-6 border border-zinc-800 bg-zinc-900/30">
            <TerminalSquare size={24} className="text-zinc-500 mb-4" />
            <h4 className="text-white font-medium tracking-tight mb-2">Cloud Native</h4>
            <p className="text-sm font-light text-zinc-400">Architect-level expertise in AWS, Azure, Databricks, and Python.</p>
          </div>
          <div className="p-6 border border-zinc-800 bg-zinc-900/30">
            <BookOpen size={24} className="text-zinc-500 mb-4" />
            <h4 className="text-white font-medium tracking-tight mb-2">High-Signal Author</h4>
            <p className="text-sm font-light text-zinc-400">116 focused, implementation-grade technical books published.</p>
          </div>
          <div className="p-6 border border-zinc-800 bg-zinc-900/30">
            <Layers size={24} className="text-zinc-500 mb-4" />
            <h4 className="text-white font-medium tracking-tight mb-2">Market Proven</h4>
            <p className="text-sm font-light text-zinc-400">3,600+ engineers leveraging his architectures in production.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
