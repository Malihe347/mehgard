import { motion } from 'framer-motion'
import { useLang } from './LanguageContext'

const items = [
  { image: '/img/camp01.jpg', fa: { title: 'کمپینگ در جنگل', text: 'اقامت کمپ با تجهیزات کامل در دل جنگل هیرکانی.' }, en: { title: 'Forest Camping', text: 'Full-equipped camp stay deep in the Hyrcanian forest.' } },
  { image: '/img/camp02.jpg', fa: { title: 'کمپ های تابستانی', text: 'طلوع صبح درجنگل.' }, en: { title: 'Summer camping', text: 'A calm camp by the river also sightseeing and a walk in the woods .' } },
   { image: '/img/camp03.jpg', fa: { title: 'کمپ های پاییزی', text: 'حس پاییز در دل جنگل به همراه پذیرایی' }, en: { title: 'Fall camping', text: 'A calm camp by the river and autumn vibes.' } },
]

export default function CampingSection() {
  const { lang } = useLang()
  return (
    <section id="camping" className="page-container py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
        <span className="text-sm font-semibold text-white/80">{lang === 'fa' ? 'کمپینگ و طبیعت' : 'Camping & Nature'}</span>
        <h2 className="mt-2 text-[1.7rem] font-semibold leading-tight text-[#c6c7c4] font-['Vazirmatn','Inter',sans-serif] sm:text-4xl sm:font-extrabold sm:leading-normal sm:italic">{lang === 'fa' ? 'تجربه اقامت در طبیعت' : 'Live in the wild'}</h2>
      </motion.div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item, i) => (
          <motion.div key={item.image} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--card-bg)] shadow-xl shadow-black/10">
            <div className="aspect-square w-full overflow-hidden">
              <img src={item.image} alt={item[lang].title} className="h-full w-full object-cover object-center" loading="lazy" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-white">{item[lang].title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{item[lang].text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-7 text-white/70">
        {lang === 'fa'
          ? 'برنامه‌های کمپینگ به‌صورت فصلی برگزار می‌شوند. با شروع هر فصل و اعلام زمان برگزاری کمپ‌های جدید، اطلاعات و امکان ثبت‌نام از طریق همین صفحه در دسترس شما قرار خواهد گرفت.'
          : 'Camping programs are held seasonally. As each season begins and new camp dates are announced, details and registration will be available on this page.'}
      </p>
    </section>
  )
}