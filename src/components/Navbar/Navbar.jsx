import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { label: 'Inicio',     path: '/'           },
  { label: 'Nosotros',   path: '/nosotros'   },
  { label: 'Servicios',  path: '/servicios'  },
  { label: 'Portafolio', path: '/portafolio' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu  = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__container">

        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          Nexova<span>.</span>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contacto" className="navbar__cta" onClick={closeMenu}>
            Contáctanos
          </Link>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  )
}

export default Navbar