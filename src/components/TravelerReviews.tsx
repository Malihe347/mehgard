import { useState } from 'react'
import { motion } from 'framer-motion'

type Reply = { id: string; name: string; text: string; date: string }
type Review = {
  id: string
  name: string
  avatar: string
  color: string
  rating: number
  date: string
  tour: string
  text: string
  likes: number
  liked: boolean
  replies: Reply[]
}

const initialReviews: Review[] = [
  {
    id: 'r1',
    name: 'مریم صادقی',
    avatar: 'م‌ص',
    color: 'bg-emerald-600',
    rating: 5,
    date: '۱۴۰۵/۰۲/۱۸',
    tour: 'ییلاقات مه‌آلود ماسال',
    text: 'صبح‌هایی که مه روی دامنه‌ها می‌نشست واقعاً فراموش‌نشدنی بود. اقامتگاه دنج و تمیز بود و راهنمای محلی مسیرهای پیاده‌روی خوبی پیشنهاد کرد. فقط کاش زمان بازدید از بازارچه محلی کمی بیشتر بود.',
    likes: 12,
    liked: false,
    replies: [{ id: 'rp1', name: 'پشتیبانی مه گرد', text: 'مریم عزیز، خوشحالیم که تجربه خوبی داشتید. پیشنهاد شما درباره زمان بازارچه را برای برنامه‌های بعدی در نظر می‌گیریم.', date: '۱۴۰۵/۰۲/۱۹' }],
  },
  {
    id: 'r2',
    name: 'آرمان نیک‌پور',
    avatar: 'آ‌ن',
    color: 'bg-sky-600',
    rating: 4,
    date: '۱۴۰۵/۰۱/۲۹',
    tour: 'تالاب و ساحل انزلی',
    text: 'قایق‌سواری در تالاب آرام‌بخش بود و زمان‌بندی برنامه‌ها خوب پیش رفت. غذای محلی که معرفی شد خوشمزه بود، هرچند روز دوم هوا کمی ابری شد و نور عکاسی کمتر از انتظارم بود.',
    likes: 7,
    liked: false,
    replies: [],
  },
  {
    id: 'r3',
    name: 'نگار حیدری',
    avatar: 'ن‌ح',
    color: 'bg-amber-600',
    rating: 5,
    date: '۱۴۰۴/۱۲/۱۰',
    tour: 'سفر فرهنگی شیراز',
    text: 'بازدید از باغ‌ها و بناهای تاریخی با توضیحات راهنما خیلی برایم جذاب بود. گروه کوچک بود و همین باعث شد بتوانیم راحت‌تر سؤال بپرسیم. هتل نزدیک جاذبه‌ها بود و رفت‌وآمد ساده‌ای داشتیم.',
    likes: 19,
    liked: false,
    replies: [],
  },
  {
    id: 'r4',
    name: 'پویان رستمی',
    avatar: 'پ‌ر',
    color: 'bg-rose-600',
    rating: 4,
    date: '۱۴۰۴/۱۱/۲۵',
    tour: 'گیسوم و جاده اسالم به خلخال',
    text: 'منظره جاده اسالم به خلخال واقعاً خاص بود، مخصوصاً نزدیک غروب. برنامه پیاده‌روی در جنگل گیسوم متعادل بود و برای من که زیاد حرفه‌ای نیستم مناسب بود. مسیر بین‌شهری کمی طولانی شد ولی توقف‌های بین راه کمک کرد.',
    likes: 9,
    liked: false,
    replies: [],
  },
  {
    id: 'r5',
    name: 'سارا کاظمی',
    avatar: 'س‌ک',
    color: 'bg-violet-600',
    rating: 5,
    date: '۱۴۰۴/۱۰/۰۸',
    tour: 'جنگل و مه مازندران',
    text: 'من این تور را با مادرم رفتم و هر دو راضی بودیم. ریتم برنامه آرام بود، صبحانه محلی عالی بود و میزبان اقامتگاه بسیار خوش‌برخورد. شب مه آنقدر غلیظ بود که حس کردیم وسط ابرها قدم می‌زنیم.',
    likes: 15,
    liked: false,
    replies: [{ id: 'rp2', name: 'الهام توکلی', text: 'من هم پارسال همین مسیر را رفتم، مه صبح‌گاهی‌اش واقعاً خاص است.', date: '۱۴۰۴/۱۰/۰۹' }],
  },
  {
    id: 'r6',
    name: 'حسین مرادی',
    avatar: 'ح‌م',
    color: 'bg-teal-600',
    rating: 4,
    date: '۱۴۰۴/۰۹/۱۴',
    tour: 'غذا و طبیعت رشت',
    text: 'ترکیب بازار رشت و پیاده‌روی طبیعت اطراف شهر برایم متفاوت بود. طعم غذاهای محلی که امتحان کردیم هنوز یادم هست. اگر علاقه‌مند به عکاسی هستید، بهتر است دوربین سبک همراه داشته باشید چون پیاده‌روی نسبی داریم.',
    likes: 6,
    liked: false,
    replies: [],
  },
]

function Stars({ value, onPick, size = 'sm' }: { value: number; onPick?: (n: number) => void; size?: 'sm' | 'lg' }) {
  const cls = size === 'lg' ? 'text-2xl' : 'text-sm'
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} از 5 ستاره`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onPick?.(n)}
          className={`${cls} leading-none ${n <= value ? 'text-amber-300' : 'text-white/25'} ${onPick ? 'cursor-pointer transition hover:scale-110' : 'cursor-default'}`}
          aria-label={onPick ? `${n} ستاره` : undefined}
        >
          ★
        </button>
      ))}
    </div>
  )
}

export default function TravelerReviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [replyOpen, setReplyOpen] = useState<Record<string, boolean>>({})
  const [replyDraft, setReplyDraft] = useState<Record<string, string>>({})
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', tour: '', rating: 5, text: '' })
  const [notice, setNotice] = useState('')

  const toggleLike = (id: string) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, liked: !r.liked, likes: r.liked ? r.likes - 1 : r.likes + 1 } : r,
      ),
    )
  }

  const submitReply = (id: string) => {
    const text = (replyDraft[id] || '').trim()
    if (!text) return
    const reply: Reply = {
      id: `rp-${Date.now()}`,
      name: 'بازدیدکننده',
      text,
      date: 'اکنون (نمونه)',
    }
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, replies: [...r.replies, reply] } : r)))
    setReplyDraft((d) => ({ ...d, [id]: '' }))
    setReplyOpen((o) => ({ ...o, [id]: false }))
  }

  const submitReview = (e: React.FormEvent) => {
    e.preventDefault()
    const name = form.name.trim()
    const tour = form.tour.trim()
    const text = form.text.trim()
    if (!name || !tour || !text) return
    const initials = name.split(/\s+/).map((p) => p[0]).slice(0, 2).join('‌')
    const colors = ['bg-emerald-600', 'bg-sky-600', 'bg-amber-600', 'bg-rose-600', 'bg-violet-600', 'bg-teal-600']
    const newReview: Review = {
      id: `u-${Date.now()}`,
      name,
      avatar: initials || 'م',
      color: colors[Math.floor(Math.random() * colors.length)],
      rating: form.rating,
      date: 'اکنون (نمونه)',
      tour,
      text,
      likes: 0,
      liked: false,
      replies: [],
    }
    setReviews((prev) => [newReview, ...prev])
    setForm({ name: '', tour: '', rating: 5, text: '' })
    setShowForm(false)
    setNotice('سپاس از نظر  باارزش شما')
    setTimeout(() => setNotice(''), 5000)
  }

  return (
    <section className="page-container pb-16 pt-24 sm:pt-28">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
        <span className="text-sm font-semibold text-white/80">نظرات مسافران</span>
        <h1 className="mt-2 text-3xl font-extrabold text-[#c6c7c4] sm:text-4xl font-[var(--font-heading)] italic">تجربه‌های سفر همراه مه گرد</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c6c7c4] ">گفت‌وگو و بازخورد مسافران درباره تورها و مقصدهای مختلف. این موارد نمونه‌های نمایشی هستند و به‌عنوان نظرات تأییدشده مشتریان واقعی نمایش داده نمی‌شوند.</p>
      </motion.div>

      {notice && <div className="mb-6 rounded-2xl border border-sage/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">{notice}</div>}

      <div className="mb-8 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setShowForm((v) => !v)} className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-sage">
          {showForm ? 'بستن فرم' : 'ثبت نظر شما'}
        </button>
        <span className="text-xs text-white/60">ثبت نظر در این نسخه به‌صورت محلی و نمایشی انجام می‌شود.</span>
      </div>

      {showForm && (
        <motion.form initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} onSubmit={submitReview} className="mb-10 rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] p-5 shadow-xl shadow-black/10 sm:p-6">
          <h2 className="text-lg font-bold text-white">نظر خود را بنویسید</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm text-white/80">
              نام و نام خانوادگی
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-white outline-none transition placeholder:text-white/35 focus:border-sage/40" placeholder="مثلاً: نرگس احمدی" required />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-white/80">
              مقصد یا تور
              <input value={form.tour} onChange={(e) => setForm({ ...form, tour: e.target.value })} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-white outline-none transition placeholder:text-white/35 focus:border-sage/40" placeholder="مثلاً: جنگل و مه مازندران" required />
            </label>
          </div>
          <div className="mt-4 flex flex-col gap-1.5 text-sm text-white/80">
            <span>امتیاز شما</span>
            <Stars value={form.rating} onPick={(n) => setForm({ ...form, rating: n })} size="lg" />
          </div>
          <label className="mt-4 flex flex-col gap-1.5 text-sm text-white/80">
            متن نظر
            <textarea value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} rows={4} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-white outline-none transition placeholder:text-white/35 focus:border-sage/40" placeholder="تجربه خود را بنویسید..." required />
          </label>
          <p className="mt-3 text-xs text-white/50">این یک فرم نمایشی است؛ اطلاعات ارسال‌شده به‌صورت دائمی ذخیره نمی‌شود.</p>
          <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-full bg-sage px-6 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-sage">ارسال نظر (نمونه)</button>
        </motion.form>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        {reviews.map((r, i) => (
          <motion.article key={r.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="rounded-[1.75rem] border border-white/10 bg-[var(--card-bg)] p-5 shadow-xl shadow-black/10 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white sm:h-12 sm:w-12 ${r.color}`}>{r.avatar}</div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-white">{r.name}</h3>
                    <p className="mt-0.5 text-xs text-sage/90">{r.tour}</p>
                  </div>
                  <span className="text-xs text-white/50">{r.date}</span>
                </div>
                <div className="mt-2"><Stars value={r.rating} /></div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/80">{r.text}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-3">
              <button type="button" onClick={() => toggleLike(r.id)} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${r.liked ? 'border-sage/40 bg-emerald-500/15 text-emerald-200' : 'border-white/15 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white'}`}>
                <span aria-hidden>{r.liked ? '♥' : '♡'}</span>
                <span>پسندیدن</span>
                <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px]">{r.likes}</span>
              </button>
              <button type="button" onClick={() => setReplyOpen((o) => ({ ...o, [r.id]: !o[r.id] }))} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/75 transition hover:bg-white/10 hover:text-white">
                پاسخ
              </button>
              {r.replies.length > 0 && <span className="text-xs text-white/50">{r.replies.length} پاسخ</span>}
            </div>

            {r.replies.length > 0 && (
              <div className="mt-4 space-y-3 border-s-2 border-white/10 ps-4">
                {r.replies.map((rp) => (
                  <div key={rp.id} className="rounded-xl bg-white/5 p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-white">{rp.name}</span>
                      <span className="text-[11px] text-white/45">{rp.date}</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-white/75">{rp.text}</p>
                  </div>
                ))}
              </div>
            )}

            {replyOpen[r.id] && (
              <div className="mt-4">
                <textarea value={replyDraft[r.id] || ''} onChange={(e) => setReplyDraft((d) => ({ ...d, [r.id]: e.target.value }))} rows={3} className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-sage/40" placeholder="پاسخ خود را بنویسید..." />
                <div className="mt-2 flex items-center gap-2">
                  <button type="button" onClick={() => submitReply(r.id)} className="rounded-full bg-sage px-4 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-sage">ارسال پاسخ</button>
                  <span className="text-[11px] text-white/45"></span>
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
