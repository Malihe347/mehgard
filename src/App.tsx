import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import CrescentFooter from './components/CrescentFooter'
import Home from './pages/Home'
import TripDetails from './pages/TripDetails'
import Destinations from './pages/Destinations'
import Accommodations from './pages/Accommodations'
import AccommodationDetails from './pages/AccommodationDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import InternationalTours from './pages/InternationalTours'
import LastMinuteTours from './pages/LastMinuteTours'
import SearchResults from './pages/SearchResults'
import NotFound from './pages/NotFound'
import { LanguageProvider } from './components/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-transparent text-slate-100">
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/trip/:slug" element={<TripDetails />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/accommodations/:slug" element={<AccommodationDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/international" element={<InternationalTours />} />
            <Route path="/last-minute" element={<LastMinuteTours />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CrescentFooter />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
