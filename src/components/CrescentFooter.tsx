import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useLang } from './LanguageContext'

function IconWrap({ children, label }: { children: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-white/78 sm:gap-3 sm:text-sm">
      <span aria-hidden className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white sm:h-9 sm:w-9">
        {children}
      </span>
      <span>{label}</span>
    </span>
  )
}

const Phone = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6.5 3.8h2.2l1.2 4.3-1.5 1.4a13.8 13.8 0 0 0 6.1 6.1l1.4-1.5 4.3 1.2v2.2a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.5 6a2 2 0 0 1 2-2.2Z" /></svg>
)
const Mail = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6.5h16v11H4z" /><path d="m5 7.5 7 6 7-6" /></svg>
)
const WhatsApp = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 4.2A7.6 7.6 0 0 0 5.5 15.5L4.6 19l3.6-.9A7.6 7.6 0 1 0 12 4.2Zm0 13.8a6.2 6.2 0 0 1-3.2-.9l-.2-.1-2.1.5.6-2-.1-.3A6.2 6.2 0 1 1 12 18Zm3.4-4.6c-.2-.1-1.1-.5-1.2-.6s-.3-.1-.4.1-.5.6-.6.7-.2.2-.4.1a5 5 0 0 1-1.5-1 5.8 5.8 0 0 1-1-1.3c-.1-.2 0-.3.1-.4l.3-.4.1-.3c0-.1 0-.3-.1-.4l-.5-1.3c-.2-.3-.3-.3-.4-.3h-.4c-.1 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.1.9 2.3a8.7 8.7 0 0 0 3.4 3c.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4 0 1.1-.4 1.2-.9s.2-.8.1-.9-.2-.1-.3-.2Z" /></svg>
)
const Pin = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z" /><circle cx="12" cy="11" r="2.2" /></svg>
)

export default function CrescentFooter() {
  const { lang, t } = useLang()
  const links = [
    { to: '/', label: t.nav.home },
    { to: '/destinations', label: t.nav.destinations },
    { to: '/accommodations', label: t.nav.stays },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]
  const labels = lang === 'fa'
    ? { contact: 'تماس و پشتیبانی', trust: 'نماد اعتماد الکترونیکی', trustHint: '🚟', address: 'آدرس', addressHint: 'آدرس کامل کسب‌وکار ارائه نشده است.', phone: 'تلفن', email: 'ایمیل', whatsapp: 'واتساپ' }
    : { contact: 'Contact & Trust', trust: 'Electronic Trust Symbol (Enamad)', trustHint: 'Not displayed in demo version (requires official verification/link).', address: 'Address', addressHint: 'Full business address not provided.', phone: 'Phone', email: 'Email', whatsapp: 'WhatsApp' }

  return (
    <footer className="relative mt-4 overflow-hidden bg-[var(--card-bg)] pt-12 sm:mt-8 rounded-xl sm:pt-16 sm:pt-20">
      <div className="pointer-events-none absolute -top-8 left-1/2 h-16 w-[120%] -translate-x-1/2 rounded-[100%] border-t border-white/10 bg-[var(--page-bg)] sm:-top-14 sm:h-28" aria-hidden />
      <div className="page-container relative pb-4 sm:pb-6 sm:pb-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.15fr_.85fr] sm:gap-6 lg:gap-8">
          <div>
            <div className="text-base font-bold text-white sm:text-lg sm:text-xl">{t.brand}</div>
            <p className="mt-1 max-w-sm text-xs leading-6 text-white/65 sm:mt-3 sm:text-sm">{t.footer.tagline}</p>
            <div className="mt-3 sm:mt-5">
              <div className="text-xs font-semibold text-sage sm:text-sm">{t.footer.quick}</div>
              <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 sm:mt-3">{links.map((l) => <li key={l.to}><Link to={l.to} className="text-xs text-white/70 transition hover:text-white sm:text-sm">{l.label}</Link></li>)}</ul>
            </div>
            <p className="mt-3 text-[11px] leading-5 text-white/45">{labels.trust}: {labels.trustHint}</p>
          </div>

          <div>
            <div className="text-xs font-semibold text-sage sm:text-sm">{labels.contact}</div>
            <div className="mt-2 space-y-2 sm:mt-4 sm:space-y-3">
              <a href="tel:011234567" className="block transition hover:text-white"><IconWrap label={`${labels.phone}: 011234567`}><Phone /></IconWrap></a>
              <Link to="/contact" className="block transition hover:text-white"><IconWrap label={labels.email}><Mail /></IconWrap></Link>
              <Link to="/contact" className="block transition hover:text-white"><IconWrap label={labels.whatsapp}><WhatsApp /></IconWrap></Link>
              <div className="pt-0.5 sm:pt-1"><IconWrap label={`${labels.address}: ${labels.addressHint}`}><Pin /></IconWrap></div>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-3 text-center text-[10px] text-white/45 sm:mt-10 sm:pt-5 sm:text-xs">© {new Date().getFullYear()} {t.brand}. {t.footer.rights}</div>
      </div>
    </footer>
  )
}
