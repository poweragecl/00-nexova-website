import './Nosotros.css'

const equipoDirectivo = [
  {
    nombre: 'Carolina Reyes',
    cargo: 'CEO & Fundadora',
    bio: 'Ingeniera comercial con 15 años liderando procesos de transformación en empresas del retail y banca.',
    iniciales: 'CR',
  },
  {
    nombre: 'Matías Donoso',
    cargo: 'CTO',
    bio: 'Arquitecto de software especializado en integraciones empresariales y plataformas cloud a escala.',
    iniciales: 'MD',
  },
  {
    nombre: 'Valentina Soto',
    cargo: 'Directora de Estrategia',
    bio: 'Consultora senior con experiencia en McKinsey y proyectos de digitalización en 6 países.',
    iniciales: 'VS',
  },
]

const equipoConsultores = [
  {
    nombre: 'Andrés Morales',
    cargo: 'Consultor Senior',
    bio: 'Especialista en automatización de procesos y gestión del cambio organizacional.',
    iniciales: 'AM',
  },
  {
    nombre: 'Fernanda Lagos',
    cargo: 'UX & Producto',
    bio: 'Diseñadora de producto enfocada en experiencias digitales para usuarios no técnicos.',
    iniciales: 'FL',
  },
  {
    nombre: 'Diego Fuentes',
    cargo: 'Consultor de Datos',
    bio: 'Analista de datos con foco en KPIs de negocio y dashboards ejecutivos en tiempo real.',
    iniciales: 'DF',
  },
  {
    nombre: 'Catalina Vega',
    cargo: 'Project Manager',
    bio: 'PMP certificada con historial de proyectos entregados en tiempo y dentro del presupuesto.',
    iniciales: 'CV',
  },
]

const valores = [
  {
    icono: '◈',
    titulo: 'Resultados primero',
    descripcion: 'No medimos el éxito en horas trabajadas sino en el impacto real que generamos en tu negocio.',
  },
  {
    icono: '◎',
    titulo: 'Transparencia total',
    descripcion: 'Comunicación clara en cada etapa. Sin sorpresas, sin letra chica, sin jerga innecesaria.',
  },
  {
    icono: '⬡',
    titulo: 'Adaptabilidad',
    descripcion: 'Cada empresa es distinta. Nuestras metodologías se adaptan a tu realidad, no al revés.',
  },
  {
    icono: '◐',
    titulo: 'Visión de largo plazo',
    descripcion: 'Construimos soluciones que escalan contigo, no parches que hay que reemplazar en dos años.',
  },
]

function Nosotros() {
  return (
    <div className="nosotros">
      <NosotrosHero />
      <Historia />
      <Valores />
      <Equipo titulo="Equipo directivo" equipo={equipoDirectivo} />
      <Equipo titulo="Equipo de consultores" equipo={equipoConsultores} variante="secundario" />
      <NosotrosCta />
    </div>
  )
}

function NosotrosHero() {
  return (
    <section className="nosotros-hero">
      <div className="nosotros__container">
        <span className="section-tag">Quiénes somos</span>
        <h1 className="nosotros-hero__titulo">
          Un equipo que entiende
          <span> tu negocio</span>
        </h1>
        <p className="nosotros-hero__subtitulo">
          Somos 45 profesionales especializados en transformación digital para empresas medianas.
          Combinamos estrategia de negocio con ejecución tecnológica desde Santiago, Buenos Aires y Ciudad de México.
        </p>
      </div>
    </section>
  )
}

function Historia() {
  return (
    <section className="historia">
      <div className="nosotros__container historia__grid">
        <div className="historia__contenido">
          <span className="section-tag">Nuestra historia</span>
          <h2 className="section-title">
            Nacimos para cerrar
            <span> la brecha digital</span>
          </h2>
          <p className="historia__texto">
            En 2018, Carolina y Matías vieron que las grandes consultoras ignoraban a las empresas medianas —
            demasiado pequeñas para sus modelos, demasiado grandes para sobrevivir sin transformarse digitalmente.
          </p>
          <p className="historia__texto">
            Fundaron Nexova con una premisa simple: llevar capacidad de consultoría de primer nivel
            a empresas que realmente la necesitan, con precios justos y resultados medibles desde el primer trimestre.
          </p>
          <p className="historia__texto">
            Hoy somos 45 personas, hemos completado más de 80 proyectos en 3 países y seguimos
            creciendo con la misma convicción del primer día.
          </p>
        </div>
        <div className="historia__stats">
          <div className="historia__stat">
            <span className="historia__stat-numero">2018</span>
            <span className="historia__stat-label">Año de fundación</span>
          </div>
          <div className="historia__stat">
            <span className="historia__stat-numero">80+</span>
            <span className="historia__stat-label">Proyectos completados</span>
          </div>
          <div className="historia__stat">
            <span className="historia__stat-numero">3</span>
            <span className="historia__stat-label">Países</span>
          </div>
          <div className="historia__stat">
            <span className="historia__stat-numero">45</span>
            <span className="historia__stat-label">Personas en el equipo</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Valores() {
  return (
    <section className="valores">
      <div className="nosotros__container">
        <div className="valores__header">
          <span className="section-tag">Lo que nos mueve</span>
          <h2 className="section-title">
            Nuestros
            <span> valores</span>
          </h2>
        </div>
        <div className="valores__grid">
          {valores.map(valor => (
            <div key={valor.titulo} className="valor-card">
              <span className="valor-card__icono">{valor.icono}</span>
              <h3 className="valor-card__titulo">{valor.titulo}</h3>
              <p className="valor-card__descripcion">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Equipo({ titulo, equipo, variante }) {
  return (
    <section className={`equipo ${variante === 'secundario' ? 'equipo--secundario' : ''}`}>
      <div className="nosotros__container">
        <div className="equipo__header">
          <span className="section-tag">Nuestro equipo</span>
          <h2 className="section-title">{titulo}</h2>
        </div>
        <div className="equipo__grid">
          {equipo.map(persona => (
            <div key={persona.nombre} className="persona-card">
              <div className="persona-card__avatar">
                {persona.iniciales}
              </div>
              <h3 className="persona-card__nombre">{persona.nombre}</h3>
              <span className="persona-card__cargo">{persona.cargo}</span>
              <p className="persona-card__bio">{persona.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NosotrosCta() {
  return (
    <section className="nosotros-cta">
      <div className="nosotros__container nosotros-cta__inner">
        <div>
          <h2 className="nosotros-cta__titulo">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="nosotros-cta__subtitulo">
            Siempre estamos buscando personas talentosas y apasionadas por la transformación digital.
          </p>
        </div>
        <a href="/contacto" className="hero__btn-primary">
          Conversemos
        </a>
      </div>
    </section>
  )
}

export default Nosotros