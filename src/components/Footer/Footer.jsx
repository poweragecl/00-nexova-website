import { Link } from 'react-router-dom'
import './Footer.css'

const links = [
  { label: 'Inicio',     path: '/'           },
  { label: 'Nosotros',   path: '/nosotros'   },
  { label: 'Servicios',  path: '/servicios'  },
  { label: 'Portafolio', path: '/portafolio' },
  { label: 'Contacto',   path: '/contacto'   },
]

const servicios = [
  'Transformación digital',
  'Consultoría estratégica',
  'Optimización de procesos',
  'Gestión del cambio',
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            Nexova<span>.</span>
          </Link>
          <p className="footer__tagline">
            Transformación digital que genera resultados reales para empresas medianas en Latinoamérica.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Navegación</h4>
          <ul className="footer__list">
            {links.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Servicios</h4>
          <ul className="footer__list">
            {servicios.map(servicio => (
              <li key={servicio}>
                <span className="footer__link">{servicio}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contacto</h4>
          <ul className="footer__list">
            <li><span className="footer__link">hola@nexova.cl</span></li>
            <li><span className="footer__link">+56 9 1234 5678</span></li>
            <li><span className="footer__link">Santiago, Chile</span></li>
            <li><span className="footer__link">Buenos Aires, Argentina</span></li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <span>© {year} Nexova Consulting SpA. Todos los derechos reservados.</span>
          <span>Hecho con React + WordPress</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer