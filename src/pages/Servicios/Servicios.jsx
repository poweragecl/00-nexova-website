import './Servicios.css'

const servicios = [
  {
    id: 'transformacion-digital',
    icono: '◈',
    titulo: 'Transformación digital',
    descripcion: 'Diseñamos e implementamos estrategias digitales end-to-end adaptadas a la realidad de tu empresa. Desde el diagnóstico inicial hasta la adopción final por parte de tu equipo.',
    beneficios: [
      'Diagnóstico digital completo de tu operación',
      'Hoja de ruta personalizada por etapas',
      'Selección e implementación de herramientas',
      'Capacitación y acompañamiento del equipo',
    ],
    resultado: 'Nuestros clientes reducen costos operativos en promedio un 35% durante el primer año.',
  },
  {
    id: 'consultoria-estrategica',
    icono: '◎',
    titulo: 'Consultoría estratégica',
    descripcion: 'Analizamos tu modelo de negocio e identificamos oportunidades de crecimiento con tecnología. Te ayudamos a tomar decisiones informadas con datos reales.',
    beneficios: [
      'Análisis de mercado y competencia',
      'Identificación de oportunidades digitales',
      'Definición de KPIs y métricas de éxito',
      'Reportes ejecutivos y dashboards en tiempo real',
    ],
    resultado: 'El 90% de nuestros clientes alcanza sus objetivos estratégicos en el plazo acordado.',
  },
  {
    id: 'optimizacion-procesos',
    icono: '⬡',
    titulo: 'Optimización de procesos',
    descripcion: 'Automatizamos y mejoramos los procesos internos para reducir costos y aumentar la eficiencia. Identificamos cuellos de botella y los eliminamos con tecnología.',
    beneficios: [
      'Mapeo y análisis de procesos actuales',
      'Identificación de cuellos de botella',
      'Automatización con herramientas no-code y low-code',
      'Medición de resultados y ajuste continuo',
    ],
    resultado: 'Reducción promedio del 60% en tiempos de proceso y 40% en errores operativos.',
  },
  {
    id: 'gestion-cambio',
    icono: '◐',
    titulo: 'Gestión del cambio',
    descripcion: 'Acompañamos a tu equipo durante toda la transición digital para garantizar la adopción real del cambio. La mejor tecnología falla sin las personas adecuadas.',
    beneficios: [
      'Plan de comunicación interna del cambio',
      'Talleres y capacitaciones personalizadas',
      'Identificación y formación de champions internos',
      'Seguimiento post-implementación a 90 días',
    ],
    resultado: 'Tasa de adopción promedio del 92% en los equipos que acompañamos.',
  },
]

function Servicios() {
  return (
    <div className="servicios">
      <ServiciosHero />
      <ListaServicios />
      <ServiciosCta />
    </div>
  )
}

function ServiciosHero() {
  return (
    <section className="servicios-hero">
      <div className="servicios__container">
        <span className="section-tag">Qué hacemos</span>
        <h1 className="servicios-hero__titulo">
          Servicios diseñados para
          <span> resultados reales</span>
        </h1>
        <p className="servicios-hero__subtitulo">
          No vendemos software ni licencias. Vendemos resultados.
          Cada servicio está diseñado para generar impacto medible
          en tu negocio desde el primer trimestre.
        </p>
      </div>
    </section>
  )
}

function ListaServicios() {
  return (
    <section className="lista-servicios">
      <div className="servicios__container">
        {servicios.map((servicio, index) => (
          <ServicioItem
            key={servicio.id}
            servicio={servicio}
            invertido={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  )
}

function ServicioItem({ servicio, invertido }) {
  return (
    <div className={`servicio-item ${invertido ? 'servicio-item--invertido' : ''}`}>

      <div className="servicio-item__contenido">
        <span className="servicio-item__icono">{servicio.icono}</span>
        <h2 className="servicio-item__titulo">{servicio.titulo}</h2>
        <p className="servicio-item__descripcion">{servicio.descripcion}</p>
        <ul className="servicio-item__beneficios">
          {servicio.beneficios.map(beneficio => (
            <li key={beneficio} className="servicio-item__beneficio">
              <span className="servicio-item__check">✓</span>
              {beneficio}
            </li>
          ))}
        </ul>
      </div>

      <div className="servicio-item__resultado">
        <div className="resultado-card">
          <span className="resultado-card__label">Resultado típico</span>
          <p className="resultado-card__texto">{servicio.resultado}</p>
          <a href="/contacto" className="hero__btn-primary">
            Quiero este servicio
          </a>
        </div>
      </div>

    </div>
  )
}

function ServiciosCta() {
  return (
    <section className="servicios-cta">
      <div className="servicios__container">
        <div className="servicios-cta__inner">
          <span className="section-tag">¿No sabes por dónde empezar?</span>
          <h2 className="servicios-cta__titulo">
            Te ayudamos a identificar
            <span> qué necesita tu empresa</span>
          </h2>
          <p className="servicios-cta__subtitulo">
            Agenda un diagnóstico gratuito de 30 minutos y te diremos
            exactamente qué servicio se adapta mejor a tu situación actual.
          </p>
          <a href="/contacto" className="hero__btn-primary">
            Agendar diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  )
}

export default Servicios