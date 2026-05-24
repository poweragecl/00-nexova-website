import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <Metricas />
      <ServiciosHome />
      <CasosHome />
      <CtaFinal />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">

        <div className="hero__tag">
          Consultoría en transformación digital
        </div>

        <h1 className="hero__title">
          Hacemos crecer tu empresa
          <span> con estrategia</span>
          <br />y tecnología
        </h1>

        <p className="hero__subtitle">
          Acompañamos a empresas medianas en cada paso de su evolución digital.
          Más de 80 proyectos en Latinoamérica con resultados medibles.
        </p>

        <div className="hero__actions">
          <a href="/servicios" className="hero__btn-primary">
            Ver nuestros servicios
          </a>
          <a href="/nosotros" className="hero__btn-secondary">
            Conoce el equipo →
          </a>
        </div>

      </div>
    </section>
  )
}


function Metricas() {
  const datos = [
    { numero: '80+',  label: 'Proyectos completados'     },
    { numero: '3',    label: 'Países en Latinoamérica'   },
    { numero: '95%',  label: 'Clientes satisfechos'      },
    { numero: '45',   label: 'Expertos en el equipo'     },
  ]

  return (
    <section className="metricas">
      <div className="metricas__container">
        {datos.map(dato => (
          <div key={dato.label} className="metricas__item">
            <span className="metricas__numero">{dato.numero}</span>
            <span className="metricas__label">{dato.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}


function ServiciosHome() {
  const servicios = [
    {
      icono: '⚡',
      titulo: 'Transformación digital',
      descripcion: 'Modernizamos los procesos core de tu empresa con tecnología que realmente se usa.',
    },
    {
      icono: '🧭',
      titulo: 'Consultoría estratégica',
      descripcion: 'Diagnóstico, hoja de ruta y acompañamiento para tomar decisiones con datos.',
    },
    {
      icono: '⚙️',
      titulo: 'Optimización de procesos',
      descripcion: 'Eliminamos cuellos de botella y automatizamos lo que no necesita intervención humana.',
    },
    {
      icono: '🔄',
      titulo: 'Gestión del cambio',
      descripcion: 'Acompañamos a los equipos para que la transformación ocurra de verdad, no solo en papel.',
    },
    {
      icono: '📊',
      titulo: 'Analítica de negocio',
      descripcion: 'Convertimos datos en decisiones. Dashboards, KPIs y reportes que se entienden.',
    },
    {
      icono: '🔐',
      titulo: 'Seguridad y compliance',
      descripcion: 'Protegemos tu operación digital y te ayudamos a cumplir con las regulaciones vigentes.',
    },
  ]

  return (
    <section className="servicios-home">
      <div className="servicios-home__container">

        <div className="servicios-home__header">
          <span className="section-tag">Qué hacemos</span>
          <h2 className="section-title">Servicios diseñados<br />para crecer</h2>
          <p className="section-subtitle">
            Cada servicio está pensado para generar impacto medible
            en el corto y mediano plazo.
          </p>
        </div>

        <div className="servicios-home__grid">
          {servicios.map(servicio => (
            <div key={servicio.titulo} className="servicio-card">
              <span className="servicio-card__icono">{servicio.icono}</span>
              <h3 className="servicio-card__titulo">{servicio.titulo}</h3>
              <p className="servicio-card__descripcion">{servicio.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="servicios-home__footer">
          <a href="/servicios" className="hero__btn-primary">
            Ver todos los servicios
          </a>
        </div>

      </div>
    </section>
  )
}

function CasosHome() {
  const casos = [
    {
      empresa: 'RetailMax',
      industria: 'Retail',
      resultado: '+340% en ventas digitales',
      descripcion: 'Implementamos una plataforma e-commerce integrada con su ERP existente en menos de 4 meses.',
      tag: 'Transformación digital',
    },
    {
      empresa: 'LogiPro',
      industria: 'Logística',
      resultado: '-60% en tiempos de despacho',
      descripcion: 'Automatizamos la gestión de rutas y bodega con un sistema a medida conectado en tiempo real.',
      tag: 'Optimización de procesos',
    },
    {
      empresa: 'SaludVida',
      industria: 'Salud',
      resultado: '3x más pacientes atendidos',
      descripcion: 'Digitalizamos la agenda y ficha clínica de una red de 12 centros médicos en 3 ciudades.',
      tag: 'Consultoría estratégica',
    },
  ]

  return (
    <section className="casos-home">
      <div className="casos-home__container">

        <div className="casos-home__header">
          <span className="section-tag">Casos de éxito</span>
          <h2 className="section-title">
            Resultados que
            <span> hablan por sí solos</span>
          </h2>
          <p className="section-subtitle">
            Empresas medianas que confiaron en Nexova y transformaron
            su operación en tiempo récord.
          </p>
        </div>

        <div className="casos-home__grid">
          {casos.map(caso => (
            <div key={caso.empresa} className="caso-card">
              <div className="caso-card__header">
                <div>
                  <span className="caso-card__empresa">{caso.empresa}</span>
                  <span className="caso-card__industria">{caso.industria}</span>
                </div>
                <span className="caso-card__tag">{caso.tag}</span>
              </div>
              <p className="caso-card__resultado">{caso.resultado}</p>
              <p className="caso-card__descripcion">{caso.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="servicios-home__footer">
          <a href="/portafolio" className="hero__btn-primary">
            Ver todos los casos
          </a>
        </div>

      </div>
    </section>
  )
}

function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="cta-final__container">
        <span className="section-tag">¿Listo para el siguiente paso?</span>
        <h2 className="cta-final__titulo">
          Hablemos de tu proyecto
        </h2>
        <p className="cta-final__subtitulo">
          Cuéntanos dónde está tu empresa hoy y hacia dónde quiere ir.
          En 30 minutos te damos un diagnóstico sin costo.
        </p>
        <div className="cta-final__actions">
          <a href="/contacto" className="hero__btn-primary">
            Agendar diagnóstico gratuito
          </a>
          <a href="mailto:hola@nexova.cl" className="hero__btn-secondary">
            hola@nexova.cl
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home