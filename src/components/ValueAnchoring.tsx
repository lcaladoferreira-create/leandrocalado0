import { motion } from "motion/react";
import { usePreferences } from "../contexts/PreferencesContext";

export function ValueAnchoring() {
  const { t } = usePreferences();

  return (
    <section className="py-24 px-6 bg-zinc-100 dark:bg-zinc-900/20 border-y border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950"
        >
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 text-zinc-900 dark:text-white">
            {t('val.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <div>
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">{t('val.c1.t')}</p>
              <p className="text-zinc-600 dark:text-zinc-300 font-light text-sm">{t('val.c1.d')}</p>
            </div>
            <div>
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">{t('val.c2.t')}</p>
              <p className="text-zinc-600 dark:text-zinc-300 font-light text-sm">{t('val.c2.d')}</p>
            </div>
            <div>
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">{t('val.c3.t')}</p>
              <p className="text-zinc-600 dark:text-zinc-300 font-light text-sm">{t('val.c3.d')}</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-zinc-500 dark:text-zinc-400 italic">{t('val.quote')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
