import { motion } from "motion/react";

export function Agitation() {
  return (
    <section className="py-32 px-6 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
            The Cost of Falling Behind
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8 text-zinc-400 text-lg leading-relaxed font-light"
        >
          <p>
            Learning AI, data engineering, and automation through fragmented documentation is an expensive illusion. You spend weeks piecing together API limits, broken dependencies, and deprecated methods. 
          </p>
          <p>
            This fragmentation costs execution speed. It costs strategic relevance. Professionals who rely entirely on scattered YouTube tutorials and Reddit threads remain tactical operators, rather than architectural leaders. They know the syntax, but miss the system.
          </p>
          <p className="text-zinc-50 font-medium pl-6 border-l border-zinc-700">
            Ignorance in the AI era is no longer passive—it actively degrades your professional value. Those who map the logic, orchestrate the agents, and own the data pipeline will command the market. Everyone else will be outsourced to the systems they refused to build.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
