import { Sun, Moon, Globe } from "lucide-react";
import { usePreferences } from "../contexts/PreferencesContext";
import { LanguageCode } from "../i18n/translations";

const languages: { code: LanguageCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'fr', label: 'Français' },
  { code: 'ja', label: '日本語' },
];

export function TopNav() {
  const { theme, toggleTheme, lang, setLang } = usePreferences();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
        <span className="font-mono font-medium tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
          Leandro Calado // Library
        </span>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 group relative text-zinc-600 dark:text-zinc-400">
            <Globe size={16} />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as LanguageCode)}
              className="appearance-none bg-transparent border-none font-medium cursor-pointer focus:outline-none focus:ring-0 uppercase tracking-widest text-xs pr-4 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code} className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-锌-100">
                  {l.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={toggleTheme}
            className="p-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
