import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useLang } from './LanguageContext'

export default function SiteHeader() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`)
  }
const links = [
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: lang === 'fa' ? 'پشتیبانی' : 'Support' },
    { to: '/reviews', label: lang === 'fa' ? 'نظرات مسافران' : "People's Reviews" },
     { to: '/', label: t.nav.home },
  ]
  return (
    <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="absolute inset-x-0 top-0 z-40">
      <div dir="ltr" className="page-container flex items-center justify-between gap-3 py-2 sm:py-2.5">
        <div className="flex items-center gap-2 lg:hidden">
          <button type="button" aria-label="Menu" onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/45 text-white backdrop-blur-md">
            <span className="text-lg leading-none">{open ? '✕' : '☰'}</span>
          </button>
          <Link to="/" className="lg:hidden text-sm font-semibold text-white">
            Mehgard
          </Link>
        </div>
        <nav className="hidden items-center gap-1 rounded-full border border-white/20 bg-white/12 p-1 shadow-lg shadow-black/10 backdrop-blur-xl lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${isActive ? 'bg-white/90 text-slate-950' : 'text-white hover:bg-white/12'}`}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/" className="hidden lg:inline-flex text-sm font-semibold text-white">Mehgard</Link>
          <Link to="/" aria-label="Home" className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/35 text-white backdrop-blur-md transition hover:bg-white/15 inline-flex lg:h-11 lg:w-11">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 lg:h-5 lg:w-5"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>
          </Link>
          <form onSubmit={submitSearch} className="flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/35 py-1 pl-2 pr-1 backdrop-blur-md lg:py-1.5 lg:pl-4 lg:pr-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-white/70"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder={lang === 'fa' ? 'جستجو...' : 'Search...'} className="w-16 bg-transparent text-xs text-white outline-none placeholder:text-white/50 sm:w-28 md:w-36 lg:w-48 lg:text-sm" />
          </form>
          <div className="flex rounded-full border border-white/20 bg-slate-950/35 p-0.5 backdrop-blur-md">
            {(['fa', 'en'] as const).map((l) => (
              <button key={l} type="button" onClick={() => setLang(l)} className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${lang === l ? 'bg-white text-slate-950' : 'text-white/85 hover:text-white'}`}>{l.toUpperCase()}</button>
            ))}
          </div>
          <Link to="/contact" className="hidden rounded-full border border-white/20 bg-white/85 px-3.5 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-white sm:inline-flex">{t.cta}</Link>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-slate-950/90 backdrop-blur-xl lg:hidden">
            <div className="page-container flex flex-col gap-2 py-3">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-xl px-4 py-3 text-base font-semibold ${isActive ? 'bg-white text-slate-950' : 'text-white bg-white/5'}`}>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}