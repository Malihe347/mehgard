import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import CategoryBar from '../components/CategoryBar'
import DestinationCards from '../components/DestinationCards'
import CampingSection from '../components/CampingSection'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo === 'categories') {
      const el = document.getElementById('categories')
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
      window.history.replaceState({}, document.title)
    }
    if (state?.scrollTo === 'destinations') {
      const el = document.getElementById('destinations')
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
      window.history.replaceState({}, document.title)
    }
  }, [location])

  return (
    <main className="min-h-screen bg-transparent">
      <HeroSection />
      <div className="mt-8 sm:mt-10">
        <CategoryBar />
      </div>
      <div className="page-container mt-6 overflow-hidden rounded-3xl border-2 border-yellow-300/60 bg-gradient-to-r from-red-700 via-red-950 to-red-500 px-4 py-4 shadow-2xl">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
          <div className="flex gap-2">
            <img src="/img/sell02.jpg" alt="" className="h-24 w-20 rounded-lg object-cover sm:h-28" />
            <img src="/img/sell03.jpg" alt="" className="h-24 w-20 rounded-lg object-cover sm:h-28" />
          </div>
          <div className="flex flex-1 flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2 text-2xl sm:text-3xl">
              <span className="lastminute-bob inline-block">🎁</span>
              <span className="lastminute-bob inline-block" style={{ animationDelay: '0.3s' }}>%</span>
              <span className="lastminute-bob inline-block" style={{ animationDelay: '0.6s' }}>🎁</span>
            </div>
            <h2 className="lastminute-glow text-lg font-extrabold text-white sm:text-2xl">تورهای لحظه آخری | آفرهای ویژه</h2>
            <button type="button" onClick={() => navigate('/last-minute')} className="rounded-full bg-white px-6 py-2 text-xs font-bold text-rose-700 shadow-lg transition hover:scale-105 hover:bg-yellow-200">کلیک کنید</button>
            <div className="relative h-8 w-full overflow-hidden" aria-hidden>
              <span className="lastminute-marquee absolute bottom-0 left-0 text-2xl">🚐</span>
            </div>
          </div>
          <div className="w-full sm:w-56">
            <video src="/img/sell01.mp4" autoPlay muted loop playsInline className="h-24 w-full rounded-lg object-cover sm:h-28" />
          </div>
        </div>
      </div>
      <DestinationCards limit={4} />
      <CampingSection />
    </main>
  )
}
