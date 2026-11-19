import { Link, useSearchParams } from 'react-router-dom'
import { useLang } from '../components/LanguageContext'
import { FEATURED_TRIPS, INTERNATIONAL_TRIPS } from '../data/trips'
import { accommodations } from '../data/accommodations'

export default function SearchResults() {
  const { lang } = useLang()
  const [params] = useSearchParams()
  const q = (params.get('q') || '').trim().toLowerCase()

  const tripMatches = [...FEATURED_TRIPS, ...INTERNATIONAL_TRIPS].filter((trip) => {
    const c = trip.i18n[lang]
    return [c.title, c.location, c.short, trip.slug].some((v) => v.toLowerCase().includes(q))
  })
  const stayMatches = accommodations.filter((stay) => {
    const c = stay.i18n[lang]
    return [c.name, c.location, c.short, stay.slug].some((v) => v.toLowerCase().includes(q))
  })

  const empty = !q || (tripMatches.length === 0 && stayMatches.length === 0)

  return (
    <main className="page-container pb-16 pt-32 sm:pt-36">
      <h1 className="text-2xl font-extrabold text-[#c6c7c4] sm:text-3xl">
        {lang === 'fa' ? `نتایج جستجو برای «${q}»` : `Search results for “${q}”`}
      </h1>

      {empty ? (
        <div className="mt-6 rounded-[1.5rem] border border-white/15 bg-[var(--card-bg)] p-6 text-white">
          <h2 className="text-lg font-bold">{lang === 'fa' ? 'نتیجه‌ای یافت نشد' : 'Not Found'}</h2>
          <p className="mt-2 text-sm text-white/70">
            {lang === 'fa' ? 'موردی مطابق جستجوی شما پیدا نشد.' : 'No results matched your search.'}
          </p>
          <Link to="/" className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950">{lang === 'fa' ? 'بازگشت به خانه' : 'Back to Home'}</Link>
        </div>
      ) : (
        <div className="mt-6 space-y-8">
          {tripMatches.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-sage">{lang === 'fa' ? 'تورها' : 'Tours'}</h2>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {tripMatches.map((trip) => {
                  const c = trip.i18n[lang]
                  return (
                    <Link key={trip.id} to={`/trip/${trip.slug}`} className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--card-bg)]">
                      <img src={trip.imageUrl} alt={c.title} className="aspect-square w-full object-cover" loading="lazy" />
                      <div className="p-3">
                        <h3 className="truncate text-sm font-bold text-white">{c.title}</h3>
                        <p className="mt-1 text-xs text-sage/90">{c.location}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}
          {stayMatches.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-sage">{lang === 'fa' ? 'اقامتگاه‌ها' : 'Accommodations'}</h2>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stayMatches.map((stay) => {
                  const c = stay.i18n[lang]
                  return (
                    <Link key={stay.slug} to={`/accommodations/${stay.slug}`} className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--card-bg)]">
                      <img src={stay.image} alt={c.name} className="aspect-square w-full object-cover" loading="lazy" />
                      <div className="p-3">
                        <h3 className="truncate text-sm font-bold text-white">{c.name}</h3>
                        <p className="mt-1 text-xs text-sage/90">{c.location}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}
        </div>
      )}
    </main>
  )
}