import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Privacy from './pages/Privacy.tsx'
import Tariff from './pages/Tariff.tsx'
import Visit from './pages/Visit.tsx'
import FloatingCta from './FloatingCta.tsx'

const ADS_ID = 'AW-16713159186'

function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    window.gtag('config', ADS_ID, { page_path: location.pathname })
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tariff" element={<Tariff />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <FloatingCta />
    </BrowserRouter>
  )
}
