import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { copy, type Lang } from './i18n'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof copy)[Lang] }

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fa')
  useEffect(() => {
    document.documentElement.lang = lang === 'fa' ? 'fa' : 'en'
    document.documentElement.dir = copy[lang].dir
  }, [lang])
  const value = useMemo<Ctx>(() => ({ lang, setLang, t: copy[lang] }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang outside provider')
  return ctx
}