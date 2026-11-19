import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLang } from './LanguageContext'

export default function CategoryBar() {
  const { t } = useLang()
  return (
    <section id="categories" aria-label="Categories" className="border-y border-black/15">
      <div className="page-container py-4">
        <div className="flex flex-col gap-2 md:hidden">
          {t.categories.map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <Link to={c.to} className="flex items-center gap-2 rounded-xl border border-black bg-cat-mobile px-3 py-2 text-sm font-medium text-black shadow-sm transition hover:border-black hover:bg-sage hover:text-white">
                <span aria-hidden className="text-base text-black">{c.icon}</span>
                <span className="text-black">{c.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="hidden justify-start gap-4 overflow-x-auto px-1 pb-1 [scrollbar-width:thin] sm:flex sm:justify-center sm:gap-5 sm:overflow-visible sm:px-0">
          {t.categories.map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <Link to={c.to} className="flex min-w-max items-center gap-2 rounded-full border border-black px-4 py-2.5 text-sm font-medium text-black shadow-sm transition hover:border-black hover:bg-sage hover:text-white">
                <span aria-hidden className="text-black">{c.icon}</span>
                <span className="text-black">{c.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}