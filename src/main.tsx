import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PricingPage from './pages/Pricing/index.tsx'
import ServicesPage from './pages/Services/index.tsx'
import SupportPage from './pages/Support/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
