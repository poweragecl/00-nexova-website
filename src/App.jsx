import { Routes, Route } from 'react-router-dom'
import Navbar     from './components/Navbar/Navbar'
import Home       from './pages/Home/Home'
import Nosotros   from './pages/Nosotros/Nosotros'
import Servicios  from './pages/Servicios/Servicios'
import Portafolio from './pages/Portafolio/Portafolio'
import Contacto   from './pages/Contacto/Contacto'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/nosotros"   element={<Nosotros />} />
          <Route path="/servicios"  element={<Servicios />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto"   element={<Contacto />} />
        </Routes>
      </main>
    </>
  )
}

export default App