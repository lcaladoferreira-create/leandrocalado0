import { motion } from "motion/react";
import { usePreferences } from "../contexts/PreferencesContext";

export function Agitation() {
  const { t } = usePreferences();

  return (
    <section className="py-32 px-6 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 text-zinc-900 dark:text-white">
            {t('ag.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-light"
        >
          <p>{t('ag.p1')}</p>
          <p>{t('ag.p2')}</p>
          <p className="text-zinc-900 dark:text-zinc-50 font-medium pl-6 border-l border-zinc-300 dark:border-zinc-700">
            {t('ag.p3')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
