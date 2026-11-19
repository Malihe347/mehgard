import { useState } from 'react'
import { useLang } from '../components/LanguageContext'

type Form = { name: string; phone: string; tour: string }
type Errors = Partial<Record<keyof Form, string>>

export default function Contact() {
  const { lang, t } = useLang()
  const labels =
    lang === 'fa'
      ? {
          phone: 'شماره تماس',
          tour: 'نام تور',
          subject: 'موضوع (اختیاری)',
          nameReq: 'لطفاً نام خود را وارد کنید.',
          emailReq: 'لطفاً ایمیل خود را وارد کنید.',
          emailInvalid: 'فرمت ایمیل معتبر نیست (مثال: name@example.com).',
          phoneReq: 'لطفاً شماره تماس را وارد کنید.',
          phoneInvalid: 'شماره تماس معتبر نیست. از ارقام و در صورت نیاز + یا 0 در ابتدا استفاده کنید.',
          messageReq: 'لطفاً متن پیام را وارد کنید.',
          success:
            'ارسال نمایشی با موفقیت انجام شد. اطلاعات شما فقط در کنسول مرورگر ثبت شده و هیچ ایمیل واقعی ارسال نمی‌شود (نسخه دمو).',
          sending: 'در حال ارسال...',
          fixErrors: 'لطفاً خطاهای مشخص‌شده را برطرف کنید.',
          note: 'این فرم در نسخه دمو به‌صورت فرانت‌اند کار می‌کند و ایمیل واقعی ارسال نمی‌کند.',
        }
      : {
          phone: 'Phone number',
          tour: 'Tour name',
          subject: 'Subject (optional)',
          nameReq: 'Please enter your name.',
          emailReq: 'Please enter your email address.',
          emailInvalid: 'Please enter a valid email address (e.g. name@example.com).',
          phoneReq: 'Please enter your phone number.',
          phoneInvalid: 'Please enter a valid phone number (digits, optionally starting with + or 0).',
          messageReq: 'Please enter your message.',
          success:
            'Demo submission received. Your information was logged to the browser console only and no real email was sent (demo version).',
          sending: 'Sending...',
          fixErrors: 'Please fix the highlighted fields.',
          note: 'This form runs in frontend demo mode and does not send real emails.',
        }

  const [form, setForm] = useState<Form>({ name: '', phone: '', tour: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [submitError, setSubmitError] = useState('')

  const validate = (values: Form): Errors => {
    const e: Errors = {}
    if (!values.name.trim()) e.name = labels.nameReq
    if (!values.phone.trim()) e.phone = labels.phoneReq
    else if (!/^\+?[0-9\s\-()]{7,20}$/.test(values.phone.trim())) e.phone = labels.phoneInvalid
    return e
  }

  const setField = (key: keyof Form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev, [key]: undefined }
      return next
    })
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return
    setSuccess('')
    setSubmitError('')
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setSubmitError(labels.fixErrors)
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      tour: form.tour.trim(),
      submittedAt: new Date().toISOString(),
      mode: 'frontend-demo',
    }
    console.log('Contact form demo submission:', payload)
    setLoading(false)
    setSuccess(labels.success)
    setForm({ name: '', phone: '', tour: '' })
    setErrors({})
  }

  const fieldClass = (key: keyof Form) =>
    `mt-2 w-full rounded-xl border px-4 py-3 text-white outline-none placeholder:text-white/40 transition ${
      errors[key] ? 'border-red-500 bg-red-500/5' : 'border-white/15 bg-white/10 focus:border-sage/40'
    }`

  return (
    <main className="page-container pb-16 pt-40 sm:pt-44">
      <span className="text-sm font-semibold text-[#c6c7c4]">{lang === 'fa' ? 'خدمات پشتیبانی' : 'Support Services'}</span>
      <h1 className="mt-2 text-3xl font-extrabold text-[#c6c7c4] sm:text-4xl">{lang === 'fa' ? 'خدمات پشتیبانی' : 'Support Services'}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c6c7c4] ">{lang === 'fa' ? 'برای دریافت خدمات پشتیبانی و پیگیری درخواست کنسلی، لطفاً فرم زیر را تکمیل کنید. همچنین پیش از رزرو سفر، حتماً اطلاعات و قوانین درج‌شده در این صفحه را مطالعه کنید.' : 'To receive support and follow up on a cancellation request, please complete the form below. Before booking a trip, be sure to read the information and rules listed on this page.'}</p>
      <div className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
<div className="rounded-[1.5rem] border border-white/10 bg-[var(--card-bg)] p-5 text-white">
          <h2 className="text-lg font-bold">{lang === 'fa' ? 'قوانین و تجهیزات سفر' : 'Rules & Required Equipment'}</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-white/75">
            <li>{lang === 'fa' ? 'همراه داشتن کارت شناسایی معتبر.' : 'Valid ID card required.'}</li>
            <li>{lang === 'fa' ? 'پرداخت کامل مبلغ سفر در زمان رزرو الزامی است.' : 'Comfortable shoes and season-appropriate clothing.'}</li>
            <li>{lang === 'fa' ? 'رعایت زمان‌بندی و دستورالعمل‌های راهنما.' : 'Follow the schedule and guide instructions.'}</li>
             <li>{lang === 'fa' ? 'کفش راحت و لباس مناسب فصل.' : 'Comfortable shoes and season-appropriate clothing.'}</li>
          </ul>
        </div>

<div className="rounded-[1.5rem] border border-white/10 bg-[var(--card-bg)] p-5 text-white">
          <h2 className="text-lg font-bold">{lang === 'fa' ? 'قوانین لغو سفر' : 'Cancellation Policy'}</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-white/75">
            <li>{lang === 'fa' ? '' : 'The full trip amount must be paid at the time of booking.'}</li>
            <li>{lang === 'fa' ? 'در صورت لغو یک هفته قبل از سفر،20% از مبلغ کل کسر میگردد و مابقی عودت داده میشود.' : 'If cancelled one week before the trip, the deposit is deducted and the remaining balance is refunded.'}</li>
            <li>{lang === 'fa' ? 'در صورت لغو یک روز قبل از سفر، مبلغ سفر بازگردانده نمی‌شود.' : 'If cancelled one day before the trip, the trip payment is non-refundable.'} <button className='text-red-700 text-2xl'>x</button></li>
          </ul>
        </div>

<div className="rounded-[1.5rem] border border-white/10 bg-[var(--card-bg)] p-5 text-white">
          <h2 className="text-lg font-bold">{lang === 'fa' ? 'قوانین بازگشت وجه' : 'Refund Policy & Procedure'}</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-white/75">
            <li>{lang === 'fa' ? 'درخواست بازگشت وجه را به پشتیبانی ارسال کنید.' : 'Submit refund requests to customer support.'}</li>
            <li>{lang === 'fa' ? 'پس از بررسی، مبلغ به حساب اولیه بازگردانده می‌شود.' : 'After review, the amount is returned to the original payment account.'}</li>
            <li>{lang === 'fa' ? 'زمان پردازش بازگشت وجه تا ۷ روز کاری است.' : 'Refund processing takes up to 7 business days.'}</li>
          </ul>
        </div>

<div className="rounded-[1.5rem] border border-white/10 bg-[var(--card-bg)] p-5 text-white">
          <h2 className="text-lg font-bold">{lang === 'fa' ? 'تماس و پشتیبانی' : 'Contact & Customer Support'}</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-white/75">
            <li>{lang === 'fa' ? 'تلفن: ۰۲۱-۱۲۳۴۵۶۷۸' : 'Phone: 021-12345678'}</li>
            <li>{lang === 'fa' ? 'ایمیل: support@mehgard.example' : 'Email: support@mehgard.example'}</li>
            <li>{lang === 'fa' ? 'ساعات پاسخگویی: ۹ تا ۱۸' : 'Support hours: 9:00–18:00'}</li>
          </ul>
        </div>
      </div>
      <form className="mt-8 max-w-2xl rounded-[2rem] border border-white/10 bg-[var(--card-bg)] p-6 text-white sm:p-8" onSubmit={onSubmit} noValidate>
        {success && (
          <div className="mb-5 rounded-xl border border-sage/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
            {success}
          </div>
        )}
        {submitError && (
          <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {submitError}
          </div>
        )}
        <p className="mb-5 text-xs text-white/55">{labels.note}</p>

        <label className="block text-sm">
          {lang === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
          <input
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
            className={fieldClass('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'err-name' : undefined}
          />
          {errors.name && <span id="err-name" className="mt-1 block text-xs text-red-300">{errors.name}</span>}
        </label>

        <label className="mt-4 block text-sm">
          {labels.phone}
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setField('phone', e.target.value)}
            className={fieldClass('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
          />
          {errors.phone && <span id="err-phone" className="mt-1 block text-xs text-red-300">{errors.phone}</span>}
        </label>

        <label className="mt-4 block text-sm">
          {labels.tour}
          <input
            value={form.tour}
            onChange={(e) => setField('tour', e.target.value)}
            className={fieldClass('tour')}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-sage disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? labels.sending : t.contactPage.send}
        </button>
      </form>
    </main>
  )
}
