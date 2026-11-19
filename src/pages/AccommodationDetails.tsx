import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLang } from '../components/LanguageContext'
import { getAccommodation } from '../data/accommodations'

export default function AccommodationDetails() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useLang()
  const stay = useMemo(() => getAccommodation(slug), [slug])
  const ui = lang === 'fa'
    ? { back: 'بازگشت به اقامتگاه‌ها', gallery: 'گالری اقامتگاه', about: 'درباره اقامتگاه', location: 'موقعیت و آدرس', facilities: 'امکانات', booking: 'اطلاعات رزرو', book: 'رزرو اقامتگاه', sent: 'درخواست رزرو ثبت شد. به‌زودی با شما تماس می‌گیریم.', notFound: 'اقامتگاه یافت نشد.' }
    : { back: 'Back to Accommodations', gallery: 'Photo Gallery', about: 'About this stay', location: 'Location & Address', facilities: 'Facilities', booking: 'Booking Information', book: 'Book This Stay', sent: 'Booking request sent. We will contact you soon.', notFound: 'Accommodation not found.' }

  if (!stay) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 pt-32 text-[#c6c7c4]">
        <h1 className="text-2xl font-bold">{ui.notFound}</h1>
        <Link to="/accommodations" className="rounded-full bg-[#455230] px-5 py-2.5 text-sm font-semibold text-white">{ui.back}</Link>
      </div>
    )
  }

  const c = stay.i18n[lang]
  return (
    <main className="pb-16 pt-28 sm:pt-32">
      <div className="page-container">
        <Link to="/accommodations" className="inline-flex rounded-full border border-black/10 bg-white/35 px-4 py-2 text-sm font-semibold text-[#c6c7c4] backdrop-blur">{ui.back}</Link>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_.8fr]">
          <div className="space-y-6">
            <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#455230] shadow-xl">
              <img src={stay.image} alt={c.name} className="h-72 w-full object-cover sm:h-[26rem]" />
              <div className="p-6 text-white sm:p-8">
                <h1 className="text-3xl font-extrabold sm:text-4xl">{c.name}</h1>
                <p className="mt-2 text-sm text-white/72">{c.location} · ★ {stay.rating.toFixed(2)} ({stay.reviews})</p>
                <p className="mt-5 leading-8 text-white/78">{c.description}</p>
              </div>
            </section>
            <section className="rounded-[2rem] border border-white/10 bg-[#455230] p-6 text-white sm:p-8">
              <h2 className="text-xl font-bold">{ui.gallery}</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {stay.gallery.map((img, i) => <img key={img + i} src={img} alt={`${c.name} ${i + 1}`} className={`h-36 w-full rounded-2xl object-cover sm:h-44 ${i === 0 ? 'col-span-2 sm:col-span-2 sm:h-56' : ''}`} loading="lazy" />)}
              </div>
            </section>
            <section className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-[#455230] p-6 text-white">
                <h2 className="text-xl font-bold">{ui.location}</h2>
                <p className="mt-4 text-sm leading-7 text-white/75">{c.address}</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[#455230] p-6 text-white">
                <h2 className="text-xl font-bold">{ui.facilities}</h2>
                <ul className="mt-4 space-y-2 text-sm text-white/75">{c.facilities.map((f) => <li key={f}>• {f}</li>)}</ul>
              </div>
            </section>
          </div>
          <aside>
            <div className="sticky top-6 rounded-[2rem] border border-white/10 bg-[#455230] p-6 text-white shadow-2xl">
              <div className="text-xs text-white/55">{lang === 'fa' ? 'قیمت' : 'Price'}</div>
              <div className="mt-1 text-2xl font-extrabold text-emerald-200">{c.priceLabel}</div>
              <h2 className="mt-6 text-lg font-bold">{ui.booking}</h2>
              <p className="mt-3 text-sm leading-7 text-white/75">{c.booking}</p>
              <button type="button" onClick={() => alert(ui.sent)} className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white/90">{ui.book}</button>
            </div>
            <section className="mt-4 rounded-[2rem] border border-white/10 bg-[#455230] p-4">
              <h2 className="text-sm font-bold text-white">{lang === 'fa' ? 'نظرات مشتریان' : 'Customer Reviews'}</h2>
              <div className="mt-3 space-y-2">
                <div className="rounded-xl bg-white/5 p-3 text-xs leading-5 text-white/75">{"★★★★★ " + (lang === 'fa' ? 'اقامت تمیز و آرام بود، حتماً برمی‌گردیم.' : 'Clean and calm stay, we will definitely return.')}</div>
                <div className="rounded-xl bg-white/5 p-3 text-xs leading-5 text-white/75">{"★★★★☆ " + (lang === 'fa' ? 'موقعیت خوب و دسترسی راحت.' : 'Good location and easy access.')}</div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}