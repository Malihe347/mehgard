import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLang } from './LanguageContext'

export default function HeroSection() {
  const { t } = useLang()
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden sm:-mx-5 sm:-mt-5 sm:w-screen">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6 }}
      >
        <img src="/img/hero09.jpg" alt="" className="h-full w-full object-cover object-center" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />
      <div className="page-container relative flex h-full min-h-[100svh] flex-col justify-center px-8 py-24 sm:px-[var(--page-gutter)] sm:py-28">
        <span aria-hidden className="invisible inline-flex w-fit rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">.</span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-[138px] max-w-2xl font-['Playfair_Display','Lora',Georgia,serif] text-3xl font-semibold leading-[1.15] tracking-tight text-[#d4dacb] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] [text-shadow:0_1px_2px_rgba(0,0,0,0.5),0_4px_18px_rgba(0,0,0,0.4)] sm:mt-[146px] sm:text-4xl lg:text-[3.15rem]">{t.hero.title}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }} className="mt-5 max-w-2xl text-base leading-7 text-white drop-shadow-[0_1px_8px_rgba(15,23,42,0.45)] sm:mt-5 sm:text-lg">{t.hero.subtitle}</motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-8 flex flex-wrap gap-3">
          <span className="relative inline-block"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm">🚐</span><Link to="/destinations" className="rounded-full bg-[#455230] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:brightness-110">{t.hero.primary}</Link></span>
          <Link to="/accommodations" className="-mt-2 rounded-full border border-white/25 bg-white/12 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18">{t.hero.secondary}</Link>
        </motion.div>
      </div>
    </section>
  )
}