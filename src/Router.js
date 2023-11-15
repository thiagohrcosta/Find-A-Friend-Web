import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import City from './pages/City'
import { PetPage } from './pages/Pet'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:city" element={<City />} />
      <Route path="/pets/:pet" element={<PetPage />} />
    </Routes>
  )
}