import { Link, useNavigate } from 'react-router-dom'
import { useLang } from '../components/LanguageContext'
import { accommodations } from '../data/accommodations'

export default function Accommodations() {
  const { lang, t } = useLang()
  const navigate = useNavigate()
  return (
    <main className="page-container pb-16 pt-40 sm:pt-44">
      <div className="mb-10">
        <span className="text-sm font-semibold text-[#c6c7c4]">{t.staysPage.kicker}</span>
        <h1 className="mt-2 text-3xl font-extrabold text-[#c6c7c4] sm:text-4xl">{t.staysPage.title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c6c7c4]">{t.staysPage.desc}</p>
        <button type="button" aria-label="Close" onClick={() => navigate('/', { state: { scrollTo: 'categories' } })} className="group mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-lg leading-none text-white backdrop-blur transition hover:bg-black/50"><span aria-hidden className="transition-colors group-hover:text-red-500 group-active:text-red-500">×</span></button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {accommodations.map((stay) => {
          const c = stay.i18n[lang]
          return (
            <article key={stay.slug} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] shadow-xl shadow-black/15">
              <img src={stay.image} alt={c.name} className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-5 text-white">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold">{c.name}</h2>
                    <p className="mt-1 text-sm text-white/70">{c.location}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs">★ {stay.rating.toFixed(2)}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/72">{c.short}</p>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <div className="text-xs text-white/55">{t.staysPage.perNight}</div>
                    <div className="font-semibold text-emerald-200">{c.priceLabel}</div>
                  </div>
                  <Link to={`/accommodations/${stay.slug}`} className="rounded-full bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-white/90">{t.staysPage.action}</Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </main>
  )
}