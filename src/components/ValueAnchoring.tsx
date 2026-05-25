import { motion } from "motion/react";

export function ValueAnchoring() {
  return (
    <section className="py-24 px-6 bg-zinc-900/20 border-y border-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 border border-zinc-800 bg-zinc-950"
        >
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            The Economics of Leverage
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-12 border-t border-zinc-800 pt-12">
            <div>
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">The Cost</p>
              <p className="text-zinc-300 font-light text-sm">One week of implementation delay while hunting for reliable MCP documentation.</p>
            </div>
            <div>
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">The Liability</p>
              <p className="text-zinc-300 font-light text-sm">One manual pipeline silently failing in production due to unstructured LLM outputs.</p>
            </div>
            <div>
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">The Reality</p>
              <p className="text-zinc-300 font-light text-sm">The price of this entire technical library is less than a single hour of your loaded engineering rate.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-zinc-400 italic">"Buying one book is useful. Deploying the whole library is strategic asymmetry."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
