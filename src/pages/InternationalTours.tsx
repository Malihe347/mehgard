import DestinationCards from '../components/DestinationCards'
import PhotographerService from '../components/PhotographerService'
import { INTERNATIONAL_TRIPS } from '../data/trips'
import { useLang } from '../components/LanguageContext'
import { useNavigate } from 'react-router-dom'

export default function InternationalTours() {
  const { lang } = useLang()
  const navigate = useNavigate()
  const labels = lang === 'fa'
    ? { kicker: 'تورهای خارجی', title: 'مسیرهای بین‌المللی', desc: 'برای تورهای بین‌المللی، اطلاعات و تصاویر مربوطه را به‌زودی اضافه می‌کنیم.' }
    : { kicker: 'International Tours', title: 'Global Journeys', desc: 'Information and images for international tours will be added soon.' }

  return (
    <main className="page-container pb-16 pt-40 sm:pt-44">
      <span className="text-sm font-semibold text-[#c6c7c4]">{labels.kicker}</span>
      <h1 className="mt-2 text-3xl font-extrabold text-[#c6c7c4] sm:text-4xl font-[var(--font-heading)] italic">{labels.title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c6c7c4]">{labels.desc}</p>
      <button type="button" onClick={() => navigate('/')} className="group mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-lg leading-none text-white backdrop-blur transition hover:bg-black/50">
        <span aria-hidden className="transition-colors group-hover:text-red-500 group-active:text-red-500">×</span>
      </button>
      <DestinationCards trips={INTERNATIONAL_TRIPS} />
      <PhotographerService />
    </main>
  )
}
