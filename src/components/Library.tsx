import { motion } from "motion/react";
import { bookCatalog } from "../data/books";
import { ExternalLink } from "lucide-react";

export function Library() {
  return (
    <section id="library" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">The Collection</h2>
          <p className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-2xl">
            Strategic stacks. Not random clusters.
          </p>
        </div>

        <div className="space-y-32">
          {bookCatalog.map((track, trackIndex) => (
            <div key={track.category} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              
              {/* Category Meta */}
              <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-32 lg:h-max">
                <span className="font-mono text-xs text-zinc-500 mb-2 border border-zinc-800 px-2 py-1 rounded-sm">
                  Track {String(trackIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-white">
                  {track.category}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-6">
                  {track.description}
                </p>
                <div className="bg-zinc-900/50 p-4 border border-zinc-800/50 rounded-sm">
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Ideal Profile</p>
                  <p className="text-sm text-zinc-300 font-light">{track.audience}</p>
                </div>
              </div>

              {/* Books Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {track.books.map((book, i) => (
                  <motion.a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={book.asin}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group flex flex-col justify-between p-6 bg-zinc-950 border border-zinc-800/60 hover:border-zinc-500 transition-colors duration-300 min-h-[200px]"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-zinc-600">ASIN: {book.asin}</span>
                        <ExternalLink size={14} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                      </div>
                      <h4 className="text-lg font-medium tracking-tight text-zinc-200 group-hover:text-white transition-colors leading-snug">
                        {book.title}
                      </h4>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-zinc-900 flex justify-between items-center">
                      <span className="text-sm text-zinc-500 font-light">Available on Amazon</span>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-50 group-hover:underline underline-offset-4 decoration-zinc-700">Acquire →</span>
                    </div>
                  </motion.a>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
