import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { trips as allTrips } from '../data/trips'
import type { Trip } from '../data/trips'
import { useLang } from './LanguageContext'

function Stars({ value, onPick }: { value: number; onPick?: (n: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} type="button" onClick={() => onPick?.(n)} className={`text-sm leading-none ${n <= value ? 'text-amber-300' : 'text-white/25'} ${onPick ? 'hover:scale-110 transition' : 'cursor-default'}`}>★</button>
      ))}
    </div>
  )
}

interface DestinationCardsProps {
  limit?: number
  trips?: Trip[]
  onClose?: () => void
}

export default function DestinationCards({ limit, trips, onClose }: DestinationCardsProps) {
  const { lang } = useLang()
  const [ratings, setRatings] = useState<Record<string, number>>({})
  const t = lang === 'fa'
    ? { kicker: 'کارت‌های سفر', title: 'مقصدهای آماده رزرو', details: 'نمایش جزئیات', reviews: 'نظر', prev: 'قبلی', next: 'بعدی', viewAll: 'نمایش همه تورها' }
    : { kicker: 'Travel Cards', title: 'Ready-to-book destinations', details: 'View Details', reviews: 'reviews', prev: 'Previous', next: 'Next', viewAll: 'View All Tours' }

  const list = trips ?? allTrips
  const visible = limit ? list.slice(0, limit) : list

  return (
    <section id="destinations" className="py-16">
      <div className="page-container mb-8">
        <span className="text-sm font-semibold text-sage">{t.kicker}</span>
        <h2 className="mt-2 text-[1.7rem] font-semibold leading-tight text-[#c6c7c4] font-['Vazirmatn','Inter',sans-serif] sm:text-3xl sm:font-extrabold sm:leading-normal sm:italic">{t.title}</h2>
        {onClose && (
          <button type="button" aria-label="Close" onClick={onClose} className="group mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-lg leading-none text-white backdrop-blur transition hover:bg-black/50"><span aria-hidden className="transition-colors group-hover:text-red-500 group-active:text-red-500">×</span></button>
        )}
      </div>

      <div className="page-container relative">

        <div className="grid grid-cols-1 gap-4 px-2 pb-2 min-[420px]:grid-cols-2 sm:grid-cols-4 sm:gap-3 sm:px-6 md:px-10">
          {visible.map((trip, i) => {
            const c = trip.i18n[lang]
            const mine = ratings[trip.id]
            return (
              <motion.article
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="w-full shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--card-bg)] shadow-xl shadow-black/20"
              >
                <Link to={`/trip/${trip.slug}`} className="block aspect-square w-full overflow-hidden">
                  <img src={trip.imageUrl} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
                </Link>
                <div className="flex flex-col p-2.5 sm:p-4">
                  <div className="flex items-start justify-between gap-1.5">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold leading-5 text-white sm:text-base sm:leading-6">{c.title}</h3>
                      <p className="mt-0.5 text-[10px] text-sage/90 sm:text-xs">{c.location}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-white/8 px-1.5 py-0.5 text-[9px] text-white/75 sm:px-2.5 sm:py-1 sm:text-xs">{c.tag}</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-1 text-[9px] text-white/70 sm:gap-1.5 sm:text-[10px]">
                    <div className="rounded-lg bg-white/5 px-1.5 py-1 sm:px-2 sm:py-1.5">{c.duration}</div>
                    <div className="rounded-lg bg-white/5 px-1.5 py-1 font-semibold text-sage sm:px-2 sm:py-1.5">{c.price}</div>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-1 border-t border-white/10 pt-2 sm:gap-1.5">
                    <Stars value={Math.round(trip.rating)} />
                    <span className="text-[9px] text-white/60 sm:text-[10px]">{trip.rating.toFixed(2)} · {trip.reviewsCount} {t.reviews}</span>
                  </div>
                  <div className="mt-1 flex h-4 items-center gap-1">
                    <Stars value={mine ?? 0} onPick={(n) => setRatings((r) => ({ ...r, [trip.id]: n }))} />
                    {mine ? <span className="text-[9px] text-sage">{mine}/5</span> : null}
                  </div>
                  <Link to={`/trip/${trip.slug}`} className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-slate-950 transition hover:bg-sage sm:px-5 sm:py-2 sm:text-sm">
                    {t.details}
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
        {limit && limit < list.length && (
          <div className="page-container mt-8 flex flex-col items-center gap-4 text-center">
            <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              {lang === 'fa' ? 'discover more unforgettable travel experiences and explore all our destinations.' : 'Discover more unforgettable travel experiences and explore all our destinations.'}
            </p>
            <Link to="/destinations" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-sage">
              {t.viewAll}
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}