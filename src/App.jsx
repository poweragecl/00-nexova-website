import { Routes, Route } from 'react-router-dom'
import Home      from './pages/Home/Home'
import Nosotros  from './pages/Nosotros/Nosotros'
import Servicios from './pages/Servicios/Servicios'
import Portafolio from './pages/Portafolio/Portafolio'
import Contacto  from './pages/Contacto/Contacto'

function App() {
  return (
    <Routes>
      <Route path="/"           element={<Home />} />
      <Route path="/nosotros"   element={<Nosotros />} />
      <Route path="/servicios"  element={<Servicios />} />
      <Route path="/portafolio" element={<Portafolio />} />
      <Route path="/contacto"   element={<Contacto />} />
    </Routes>
  )
}

export default App