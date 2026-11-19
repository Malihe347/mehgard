import { Link } from 'react-router-dom'
import { useLang } from '../components/LanguageContext'
import { FEATURED_TRIPS, INTERNATIONAL_TRIPS } from '../data/trips'

export default function LastMinuteTours() {
  const { lang } = useLang()
  const picks = [FEATURED_TRIPS[0], FEATURED_TRIPS[3], INTERNATIONAL_TRIPS[0], INTERNATIONAL_TRIPS[1]].filter(Boolean)
  const labels = lang === 'fa'
    ? { kicker: 'آفر ویژه', title: 'تورهای لحظه آخری', desc: 'تورهای منتخب با تخفیف ویژه و حرکت در ۲ تا ۳ روز آینده.', off: 'تخفیف', departs: 'حرکت', details: 'مشاهده جزئیات' }
    : { kicker: 'Special Offer', title: 'Last-Minute Tours', desc: 'Selected tours with special discounts departing in the next 2–3 days.', off: 'OFF', departs: 'Departs', details: 'View Details' }

  return (
    <main className="page-container pb-16 pt-40 sm:pt-44">
      <span className="text-sm font-semibold text-sage">{labels.kicker}</span>
      <h1 className="mt-2 text-3xl font-extrabold text-[#c6c7c4] sm:text-4xl font-[var(--font-heading)] italic">{labels.title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c6c7c4]">{labels.desc}</p>

      <div className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:grid-cols-4 sm:gap-3">
        {picks.map((trip) => {
          const c = trip.i18n[lang]
          const off = 15
          const discounted = Math.round(trip.numericPrice * (1 - off / 100))
          return (
            <article key={trip.id} className="w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--card-bg)] shadow-xl shadow-black/20">
              <Link to={`/trip/${trip.slug}`} className="block aspect-square w-full overflow-hidden relative">
                <img src={trip.imageUrl} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
                <span className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">{off}% {labels.off}</span>
              </Link>
              <div className="p-3">
                <h3 className="truncate text-sm font-bold text-white">{c.title}</h3>
                <p className="mt-0.5 text-xs text-sage/90">{c.location}</p>
                <p className="mt-1 text-xs text-white/70">{labels.departs}: {lang === 'fa' ? '۲ روز آینده' : 'in 2 days'}</p>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="text-white/50 line-through">{trip.numericPrice.toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US')}</span>
                  <span className="font-bold text-sage">{discounted.toLocaleString(lang === 'fa' ? 'fa-IR' : 'en-US')}</span>
                </div>
                <Link to={`/trip/${trip.slug}`} className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-slate-950 transition hover:bg-sage sm:py-2 sm:text-sm">{labels.details}</Link>
              </div>
            </article>
          )
        })}
      </div>
    </main>
  )
}