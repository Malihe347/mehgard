import { useNavigate } from 'react-router-dom'
import DestinationCards from '../components/DestinationCards'

export default function Destinations() {
  const navigate = useNavigate()
  return (
    <main className="min-h-screen bg-transparent pb-8 pt-20 sm:pt-24">
      <DestinationCards onClose={() => navigate('/', { state: { scrollTo: 'categories' } })} />
    </main>
  )
}