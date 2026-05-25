import { motion } from "motion/react";
import { ShieldCheck, BookOpen, Layers, TerminalSquare } from "lucide-react";
import { usePreferences } from "../contexts/PreferencesContext";

export function Authority() {
  const { t } = usePreferences();

  return (
    <section className="py-32 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left Column: Title & Philosophy */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 text-zinc-900 dark:text-white">
            {t('auth.title')}
          </h2>
          <h3 className="text-xl text-zinc-600 dark:text-zinc-400 font-light mb-8">
            {t('auth.sub')}
          </h3>
          <div className="space-y-6 text-zinc-700 dark:text-zinc-400 font-light leading-relaxed">
            <p>{t('auth.p1')}</p>
            <p>{t('auth.p2')}</p>
            <p>{t('auth.p3')}</p>
          </div>
        </div>

        {/* Right Column: Credentials Grid */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
            <ShieldCheck size={24} className="text-zinc-500 mb-4" />
            <h4 className="text-zinc-900 dark:text-white font-medium tracking-tight mb-2">{t('auth.b1.t')}</h4>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">{t('auth.b1.d')}</p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
            <TerminalSquare size={24} className="text-zinc-500 mb-4" />
            <h4 className="text-zinc-900 dark:text-white font-medium tracking-tight mb-2">{t('auth.b2.t')}</h4>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">{t('auth.b2.d')}</p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
            <BookOpen size={24} className="text-zinc-500 mb-4" />
            <h4 className="text-zinc-900 dark:text-white font-medium tracking-tight mb-2">{t('auth.b3.t')}</h4>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">{t('auth.b3.d')}</p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
            <Layers size={24} className="text-zinc-500 mb-4" />
            <h4 className="text-zinc-900 dark:text-white font-medium tracking-tight mb-2">{t('auth.b4.t')}</h4>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">{t('auth.b4.d')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
