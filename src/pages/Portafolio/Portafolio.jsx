import { useState } from 'react'
import './Portafolio.css'

const casos = [
  {
    empresa: 'RetailMax',
    industria: 'Retail',
    servicio: 'Transformación digital',
    resultado: '+340% en ventas digitales',
    descripcion: 'Implementamos una plataforma e-commerce integrada con su ERP existente en menos de 4 meses, con pasarela de pago, gestión de inventario en tiempo real y panel de analytics.',
    duracion: '4 meses',
    equipo: '6 personas',
    pais: 'Chile',
  },
  {
    empresa: 'LogiPro',
    industria: 'Logística',
    servicio: 'Optimización de procesos',
    resultado: '-60% en tiempos de despacho',
    descripcion: 'Automatizamos la gestión de rutas y bodega con un sistema a medida conectado en tiempo real a su flota de 80 vehículos y 3 centros de distribución.',
    duracion: '6 meses',
    equipo: '8 personas',
    pais: 'Argentina',
  },
  {
    empresa: 'SaludVida',
    industria: 'Salud',
    servicio: 'Consultoría estratégica',
    resultado: '3x más pacientes atendidos',
    descripcion: 'Digitalizamos la agenda y ficha clínica de una red de 12 centros médicos en 3 ciudades, reduciendo tiempos de espera y eliminando el papel completamente.',
    duracion: '8 meses',
    equipo: '10 personas',
    pais: 'Chile',
  },
  {
    empresa: 'FinanGroup',
    industria: 'Finanzas',
    servicio: 'Transformación digital',
    resultado: '-45% en costos operativos',
    descripcion: 'Automatizamos la conciliación bancaria y reportes regulatorios de una financiera con operaciones en 2 países, reduciendo el trabajo manual de 40 a 4 horas semanales.',
    duracion: '5 meses',
    equipo: '7 personas',
    pais: 'México',
  },
  {
    empresa: 'AgroSur',
    industria: 'Agroindustria',
    servicio: 'Optimización de procesos',
    resultado: '+28% en productividad de campo',
    descripcion: 'Implementamos sensores IoT y un dashboard de monitoreo en tiempo real para una empresa agrícola con 3.000 hectáreas en producción.',
    duracion: '7 meses',
    equipo: '9 personas',
    pais: 'Chile',
  },
  {
    empresa: 'EduTech Plus',
    industria: 'Educación',
    servicio: 'Gestión del cambio',
    resultado: '92% adopción en 60 días',
    descripcion: 'Acompañamos a una red de colegios en la adopción de su nueva plataforma LMS, capacitando a 400 docentes y diseñando el plan de comunicación completo.',
    duracion: '3 meses',
    equipo: '5 personas',
    pais: 'México',
  },
]

const industrias = ['Todos', ...new Set(casos.map(c => c.industria))]

function Portafolio() {
  return (
    <div className="portafolio">
      <PortafolioHero />
      <CasosGrid />
    </div>
  )
}

function PortafolioHero() {
  return (
    <section className="portafolio-hero">
      <div className="portafolio__container">
        <span className="section-tag">Casos de éxito</span>
        <h1 className="portafolio-hero__titulo">
          Resultados que
          <span> hablan por sí solos</span>
        </h1>
        <p className="portafolio-hero__subtitulo">
          Más de 80 proyectos completados en Latinoamérica.
          Aquí algunos de los que más nos enorgullecen.
        </p>
      </div>
    </section>
  )
}

function CasosGrid() {
  const [filtroActivo, setFiltroActivo] = useState('Todos')

  const casosFiltrados = filtroActivo === 'Todos'
    ? casos
    : casos.filter(caso => caso.industria === filtroActivo)

  return (
    <section className="casos-grid">
      <div className="portafolio__container">

        <div className="filtros">
          {industrias.map(industria => (
            <button
              key={industria}
              className={`filtro-btn ${filtroActivo === industria ? 'filtro-btn--activo' : ''}`}
              onClick={() => setFiltroActivo(industria)}
            >
              {industria}
            </button>
          ))}
        </div>

        <div className="casos__grid">
          {casosFiltrados.map(caso => (
            <CasoCard key={caso.empresa} caso={caso} />
          ))}
        </div>

      </div>
    </section>
  )
}

function CasoCard({ caso }) {
  return (
    <div className="caso-card">
      <div className="caso-card__header">
        <div>
          <span className="caso-card__empresa">{caso.empresa}</span>
          <span className="caso-card__pais">{caso.pais}</span>
        </div>
        <span className="caso-card__industria">{caso.industria}</span>
      </div>

      <p className="caso-card__resultado">{caso.resultado}</p>
      <p className="caso-card__descripcion">{caso.descripcion}</p>

      <div className="caso-card__meta">
        <div className="caso-card__meta-item">
          <span className="caso-card__meta-label">Servicio</span>
          <span className="caso-card__meta-valor">{caso.servicio}</span>
        </div>
        <div className="caso-card__meta-item">
          <span className="caso-card__meta-label">Duración</span>
          <span className="caso-card__meta-valor">{caso.duracion}</span>
        </div>
        <div className="caso-card__meta-item">
          <span className="caso-card__meta-label">Equipo</span>
          <span className="caso-card__meta-valor">{caso.equipo}</span>
        </div>
      </div>
    </div>
  )
}

export default Portafolio