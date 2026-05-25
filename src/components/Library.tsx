import { motion } from "motion/react";
import { libraryTracks, booksByTrack } from "../data/books";
import { ExternalLink } from "lucide-react";
import { usePreferences } from "../contexts/PreferencesContext";
import { TranslationKey } from "../i18n/translations";

export function Library() {
  const { t } = usePreferences();

  return (
    <section id="library" className="py-32 px-6 bg-zinc-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">{t('lib.eyebrow')}</h2>
          <p className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white max-w-2xl">
            {t('lib.title')}
          </p>
        </div>

        <div className="space-y-32">
          {libraryTracks.map((trackId, trackIndex) => (
            <div key={trackId} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              
              {/* Category Meta */}
              <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-32 lg:h-max">
                <span className="font-mono text-xs text-zinc-500 mb-2 border border-zinc-300 dark:border-zinc-800 px-2 py-1 rounded-sm">
                  {t('lib.track')} {String(trackIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-900 dark:text-white">
                  {t(`track.${trackId}.cat` as TranslationKey)}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
                  {t(`track.${trackId}.desc` as TranslationKey)}
                </p>
                <div className="bg-white dark:bg-zinc-900/50 p-4 border border-zinc-200 dark:border-zinc-800/50 rounded-sm w-full">
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">{t('lib.ideal')}</p>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 font-light">{t(`track.${trackId}.aud` as TranslationKey)}</p>
                </div>
              </div>

              {/* Books Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {booksByTrack[trackId].map((book, i) => (
                  <motion.a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={book.asin}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="group flex flex-col justify-between p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/60 hover:border-zinc-500 dark:hover:border-zinc-500 transition-colors duration-300 min-h-[200px]"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600">ASIN: {book.asin}</span>
                        <ExternalLink size={14} className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" />
                      </div>
                      <h4 className="text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors leading-snug">
                        {book.title}
                      </h4>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-900 flex justify-between items-center">
                      <span className="text-sm text-zinc-500 font-light">{t('lib.amazon')}</span>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-50 group-hover:underline underline-offset-4 decoration-zinc-400 dark:decoration-zinc-700">{t('lib.acquire')}</span>
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
