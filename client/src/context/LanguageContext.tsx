import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { translations, t as tFn, getTranslation as getTranslationFn, type Lang } from "@/lib/translations";

const STORAGE_KEY = "apiora-lang";

function getStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {
    /* ignore */
  }
  return "es";
}

type LangContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: (path: string) => string;
  get: <T = unknown>(path: string) => T | undefined;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getStoredLang);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const t = useCallback(
    (path: string) => {
      return tFn(lang, path);
    },
    [lang],
  );

  const get = useCallback(
    <T,>(path: string): T | undefined => {
      return getTranslationFn(lang, path) as T | undefined;
    },
    [lang],
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t, get }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
