import { Link } from 'react-router-dom'
import { useLang } from '../components/LanguageContext'

export default function NotFound() {
  const { lang } = useLang()
  return (
    <main className="page-container flex min-h-[70vh] flex-col items-center justify-center pb-16 pt-32 text-center">
      <h1 className="text-5xl font-extrabold text-sage">404</h1>
      <h2 className="mt-3 text-2xl font-bold text-[#c6c7c4]">{lang === 'fa' ? 'صفحه پیدا نشد' : 'Page Not Found'}</h2>
      <p className="mt-2 max-w-md text-sm text-white/70">
        {lang === 'fa' ? 'آدرسی که وارد کرده‌اید وجود ندارد یا جابه‌جا شده است.' : 'The address you entered does not exist or has moved.'}
      </p>
      <Link to="/" className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-sage">{lang === 'fa' ? 'بازگشت به خانه' : 'Back to Home'}</Link>
    </main>
  )
}