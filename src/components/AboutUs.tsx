import { motion } from 'framer-motion'
import { useLang } from './LanguageContext'

export default function AboutUs() {
  const { t } = useLang()
  return (
    <section id="about" className="page-container py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
        <span className="text-sm font-semibold text-white/80">{t.about.kicker}</span>
        <h2 className="mt-2 text-[1.7rem] font-semibold leading-tight text-[#c6c7c4] font-['Vazirmatn','Inter',sans-serif] sm:text-4xl sm:font-extrabold sm:leading-normal sm:italic">{t.about.title}</h2>
      </motion.div>
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/15">
            <img src={t.about.image} alt={t.about.imageAlt} className="aspect-[3/4] w-full object-cover" loading="lazy" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="rounded-[2rem] border border-white/10 bg-[var(--card-bg)] p-6 shadow-xl shadow-black/10 sm:p-8 lg:p-10">
          <div className="space-y-5 text-sm leading-8 text-white/80 sm:text-[0.98rem]">
            {t.about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}