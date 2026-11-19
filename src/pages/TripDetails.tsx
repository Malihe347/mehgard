import { useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTripBySlug, INTERNATIONAL_TRIPS } from '../data/trips'
import { useLang } from '../components/LanguageContext'

export default function TripDetails() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { lang } = useLang()
  const trip = useMemo(() => getTripBySlug(slug), [slug])
  const isInternational = !!trip && INTERNATIONAL_TRIPS.some((t) => t.slug === trip.slug)
  const [demoNotice, setDemoNotice] = useState('')
  const [processing, setProcessing] = useState(false)
  const ui = lang === 'fa'
    ? {
        back: 'بازگشت به صفحه اصلی',
        about: 'درباره این سفر',
        highlights: 'ویژگی‌های سفر',
        gallery: 'گالری تصاویر',
        amenities: 'اقامت و امکانات',
        included: 'خدمات شامل',
        itinerary: 'برنامه سفر',
        requirements: 'اطلاعات و شرایط',
        book: 'رزرو این سفر',
        perPerson: 'قیمت برای هر نفر',
        guests: 'حداکثر مهمان',
        rooms: 'اتاق',
        demo:
          'در نسخه دمو، رزرو واقعی و پرداخت آنلاین انجام نمی‌شود. برای رزرو نهایی به اتصال بک‌اند/سرویس پرداخت نیاز است. درخواست شما فقط به‌صورت نمایشی در کنسول مرورگر ثبت شد.',
        processing: 'در حال ثبت نمایشی...',
        notFound: 'این سفر یافت نشد.',
      }
    : {
        back: 'Back to Home',
        about: 'About this trip',
        highlights: 'Highlights',
        gallery: 'Photo Gallery',
        amenities: 'Accommodation & Facilities',
        included: 'Included Services',
        itinerary: 'Itinerary',
        requirements: 'Important Information',
        book: 'Book This Trip',
        perPerson: 'Price per person',
        guests: 'Max guests',
        rooms: 'Bedrooms',
        demo:
          'In this demo version, real booking and online payment are unavailable. A backend/payment service is required for final booking. Your request was logged to the browser console as a demo only.',
        processing: 'Processing demo...',
        notFound: 'Trip not found.',
      }

  if (!trip) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-white">
        <h2 className="text-2xl font-bold">{ui.notFound}</h2>
        <button type="button" onClick={() => isInternational ? navigate('/international') : navigate('/', { state: { scrollTo: 'destinations' } })} className="rounded-full bg-sage px-5 py-2.5 text-sm font-semibold text-slate-950">{lang === 'fa' ? 'بازگشت به مقصدها' : 'Back to destinations'}</button>
      </div>
    )
  }

  const c = trip.i18n[lang]
  const handleDemoBook = async () => {
    if (processing) return
    setProcessing(true)
    setDemoNotice('')
    await new Promise((r) => setTimeout(r, 500))
    console.log('Trip booking demo request (no real booking/payment):', {
      type: 'trip',
      slug: trip.slug,
      title: c.title,
      price: c.price,
      dates: c.dates,
      submittedAt: new Date().toISOString(),
      mode: 'frontend-demo',
    })
    setProcessing(false)
    setDemoNotice(ui.demo)
  }

  return (
    <div className="min-h-screen bg-transparent pb-20 text-slate-100">
      <section className="relative h-[52vh] min-h-[320px] overflow-hidden sm:h-[64vh]">
        <img src={trip.imageUrl} alt={c.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--page-bg)] via-black/30 to-black/25" />
        <div className="page-container absolute inset-x-0 bottom-0 pb-8">
          <span className="inline-flex rounded-full bg-sage/15 px-3 py-1 text-xs font-semibold text-emerald-200">{c.tag}</span>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-5xl">{c.title}</h1>
          <p className="mt-3 text-sm text-white/75 sm:text-base">{c.location} · {c.duration} · ★ {trip.rating.toFixed(2)}</p>
        </div>
      </section>

      <div className="page-container mt-6 flex">
        <button
          type="button"
          aria-label={lang === 'fa' ? 'بستن' : 'Close'}
          onClick={() => isInternational ? navigate('/international') : navigate('/', { state: { scrollTo: 'destinations' } })}
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/35 text-lg leading-none text-white backdrop-blur transition hover:bg-black/50 ltr:mr-auto rtl:ml-auto"
        >
          <span aria-hidden className="transition-colors group-hover:text-red-500 group-active:text-red-500">×</span>
        </button>
      </div>

      <div className="page-container mt-4 grid gap-8 lg:grid-cols-[1.45fr_.75fr]">
        <div className="space-y-8">
          <section className="rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] p-6">
            <h2 className="text-xl font-bold text-white">{ui.about}</h2>
            <p className="mt-4 leading-8 text-white/72">{c.description}</p>
            <h3 className="mt-6 text-sm font-semibold text-sage">{ui.highlights}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {c.highlights.map((h) => <span key={h} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75">{h}</span>)}
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] p-6">
            <h2 className="text-xl font-bold text-white">{ui.gallery}</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {trip.gallery.map((img, i) => <img key={img + i} src={img} alt={`${c.title} ${i + 1}`} className={`h-36 w-full rounded-2xl object-cover sm:h-44 ${i === 0 ? 'col-span-2 sm:col-span-2 sm:h-56' : ''}`} loading="lazy" />)}
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] p-6">
            <h2 className="text-xl font-bold text-white">{ui.itinerary}</h2>
            <div className="mt-4 space-y-3">
              {c.itinerary.map((it) => (
                <div key={it.day} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="text-sm font-semibold text-sage">{it.day}</div>
                  <p className="mt-1 text-sm leading-6 text-white/70">{it.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] p-6">
              <h2 className="text-lg font-bold text-white">{ui.amenities}</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/72">{c.amenities.map((a) => <li key={a}>• {a}</li>)}</ul>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] p-6">
              <h2 className="text-lg font-bold text-white">{ui.included}</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/72">{c.included.map((a) => <li key={a}>• {a}</li>)}</ul>
            </div>
          </section>

          <section className="rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] p-6">
            <h2 className="text-xl font-bold text-white">{ui.requirements}</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/72">{c.requirements.map((r) => <li key={r}>• {r}</li>)}</ul>
          </section>
        </div>

        <aside>
          <div className="sticky top-6 rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] p-6 shadow-2xl">
            <div className="text-xs text-white/50">{ui.perPerson}</div>
            <div className="mt-1 text-2xl font-extrabold text-sage">{c.price}</div>
            <div className="mt-6 space-y-3 text-sm">
              <Row k={lang === 'fa' ? 'تاریخ شروع/پایان' : 'Start / End dates'} v={c.dates} />
              <Row k={lang === 'fa' ? 'زمان حرکت' : 'Departure'} v={c.departure} />
              <Row k={lang === 'fa' ? 'زمان بازگشت' : 'Return'} v={c.returnTime} />
              <Row k={lang === 'fa' ? 'مدت سفر' : 'Duration'} v={c.duration} />
              <Row k={ui.guests} v={`${trip.maxGuests}`} />
              <Row k={ui.rooms} v={`${trip.bedrooms}`} />
            </div>
            <p className="mt-5 text-xs leading-6 text-white/55">{c.booking}</p>
            {demoNotice && (
              <div className="mt-4 rounded-xl border border-amber-400/30 bg-amber-500/10 px-3 py-2.5 text-xs leading-6 text-amber-100">
                {demoNotice}
              </div>
            )}
            <button type="button" onClick={handleDemoBook} disabled={processing} className="mt-6 w-full rounded-full bg-sage px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sage disabled:cursor-not-allowed disabled:opacity-60">{processing ? ui.processing : ui.book}</button>
            <button type="button" className="mt-3 w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20">🎁کد تخفیف</button>
          </div>
        </aside>
        <section className="mt-6 rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] p-4">
          <h2 className="text-sm font-bold text-white">{lang === 'fa' ? 'نظرات مشتریان' : 'Customer Reviews'}</h2>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="rounded-xl bg-white/5 p-3 text-xs leading-5 text-white/75">{"★★★★★ " + (lang === 'fa' ? 'تجربه عالی بود، راهنما بسیار حرفه‌ای و مسیرها دقیق بود.' : 'Great experience, very professional guide and accurate itinerary.')}</div>
            <div className="rounded-xl bg-white/5 p-3 text-xs leading-5 text-white/75">{"★★★★☆ " + (lang === 'fa' ? 'اقامت تمیز و برنامه‌ریزی منظم. دوباره سفر می‌کنم.' : 'Clean stay and well-organized plan. Would travel again.')}</div>
            <div className="rounded-xl bg-white/5 p-3 text-xs leading-5 text-white/75">{"★★★★★ " + (lang === 'fa' ? 'ارزشش را داشت؛ پشتیبانی سریع پاسخ داد.' : 'Worth it; support responded quickly.')}</div>
          </div>
        </section>
      </div>
    </div>
  )
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-3 last:border-0 last:pb-0">
      <span className="text-white/55">{k}</span>
      <span className="text-end font-medium text-white">{v}</span>
    </div>
  )
}
