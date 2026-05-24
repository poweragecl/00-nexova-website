import { useState } from 'react'
import './Contacto.css'

const oficinas = [
  {
    ciudad: 'Santiago',
    pais: 'Chile',
    direccion: 'Av. Apoquindo 4501, piso 12, Las Condes',
    telefono: '+56 9 1234 5678',
    email: 'santiago@nexova.cl',
  },
  {
    ciudad: 'Buenos Aires',
    pais: 'Argentina',
    direccion: 'Av. Corrientes 1234, piso 8, CABA',
    telefono: '+54 11 1234 5678',
    email: 'buenosaires@nexova.cl',
  },
  {
    ciudad: 'Ciudad de México',
    pais: 'México',
    direccion: 'Paseo de la Reforma 250, piso 15, Cuauhtémoc',
    telefono: '+52 55 1234 5678',
    email: 'mexico@nexova.cl',
  },
]

const estadoInicial = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  servicio: '',
  mensaje: '',
}

function Contacto() {
  return (
    <div className="contacto">
      <ContactoHero />
      <ContactoContenido />
    </div>
  )
}

function ContactoHero() {
  return (
    <section className="contacto-hero">
      <div className="contacto__container">
        <span className="section-tag">Hablemos</span>
        <h1 className="contacto-hero__titulo">
          El primer paso es
          <span> una conversación</span>
        </h1>
        <p className="contacto-hero__subtitulo">
          Cuéntanos dónde está tu empresa hoy y hacia dónde quiere ir.
          Sin compromiso, sin presión — solo una charla honesta.
        </p>
      </div>
    </section>
  )
}

function ContactoContenido() {
  return (
    <section className="contacto-contenido">
      <div className="contacto__container contacto-contenido__grid">
        <Formulario />
        <InfoContacto />
      </div>
    </section>
  )
}

function Formulario() {
  const [campos, setCampos] = useState(estadoInicial)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setCampos(prev => ({ ...prev, [name]: value }))
    if (errores[name]) {
      setErrores(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validar = () => {
    const nuevosErrores = {}
    if (!campos.nombre.trim())
      nuevosErrores.nombre = 'El nombre es requerido'
    if (!campos.email.trim())
      nuevosErrores.email = 'El email es requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email))
      nuevosErrores.email = 'El email no es válido'
    if (!campos.mensaje.trim())
      nuevosErrores.mensaje = 'El mensaje es requerido'
    return nuevosErrores
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nuevosErrores = validar()
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }
    setEnviando(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setEnviando(false)
    setEnviado(true)
    setCampos(estadoInicial)
  }

  if (enviado) {
    return (
      <div className="formulario formulario--enviado">
        <span className="formulario__check">✓</span>
        <h3 className="formulario__enviado-titulo">
          ¡Mensaje recibido!
        </h3>
        <p className="formulario__enviado-texto">
          Nos pondremos en contacto contigo en menos de 24 horas hábiles.
          Mientras tanto, puedes revisar nuestros casos de éxito.
        </p>
        <a href="/portafolio" className="hero__btn-primary">
          Ver portafolio
        </a>
      </div>
    )
  }

  return (
    <form className="formulario" onSubmit={handleSubmit} noValidate>
      <h2 className="formulario__titulo">Envíanos un mensaje</h2>

      <div className="formulario__fila">
        <Campo
          label="Nombre completo"
          name="nombre"
          value={campos.nombre}
          onChange={handleChange}
          error={errores.nombre}
          requerido
        />
        <Campo
          label="Empresa"
          name="empresa"
          value={campos.empresa}
          onChange={handleChange}
          error={errores.empresa}
        />
      </div>

      <div className="formulario__fila">
        <Campo
          label="Email"
          name="email"
          type="email"
          value={campos.email}
          onChange={handleChange}
          error={errores.email}
          requerido
        />
        <Campo
          label="Teléfono"
          name="telefono"
          value={campos.telefono}
          onChange={handleChange}
          error={errores.telefono}
        />
      </div>

      <div className="campo">
        <label className="campo__label">
          Servicio de interés
        </label>
        <select
          name="servicio"
          value={campos.servicio}
          onChange={handleChange}
          className="campo__input"
        >
          <option value="">Selecciona un servicio</option>
          <option value="transformacion">Transformación digital</option>
          <option value="consultoria">Consultoría estratégica</option>
          <option value="optimizacion">Optimización de procesos</option>
          <option value="cambio">Gestión del cambio</option>
          <option value="otro">Otro / No lo sé aún</option>
        </select>
      </div>

      <div className="campo">
        <label className="campo__label">
          Mensaje <span className="campo__requerido">*</span>
        </label>
        <textarea
          name="mensaje"
          value={campos.mensaje}
          onChange={handleChange}
          className={`campo__input campo__textarea ${errores.mensaje ? 'campo__input--error' : ''}`}
          placeholder="Cuéntanos brevemente sobre tu empresa y qué necesitas..."
          rows={5}
        />
        {errores.mensaje && (
          <span className="campo__error">{errores.mensaje}</span>
        )}
      </div>

      <button
        type="submit"
        className="formulario__submit"
        disabled={enviando}
      >
        {enviando ? 'Enviando...' : 'Enviar mensaje'}
      </button>

    </form>
  )
}

function Campo({ label, name, type = 'text', value, onChange, error, requerido }) {
  return (
    <div className="campo">
      <label className="campo__label">
        {label}
        {requerido && <span className="campo__requerido"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`campo__input ${error ? 'campo__input--error' : ''}`}
        placeholder={label}
      />
      {error && <span className="campo__error">{error}</span>}
    </div>
  )
}

function InfoContacto() {
  return (
    <div className="info-contacto">
      <h2 className="info-contacto__titulo">Nuestras oficinas</h2>

      <div className="oficinas">
        {oficinas.map(oficina => (
          <div key={oficina.ciudad} className="oficina-card">
            <div className="oficina-card__header">
              <span className="oficina-card__ciudad">{oficina.ciudad}</span>
              <span className="oficina-card__pais">{oficina.pais}</span>
            </div>
            <ul className="oficina-card__datos">
              <li>{oficina.direccion}</li>
              <li>{oficina.telefono}</li>
              <li>
                <a href={`mailto:${oficina.email}`} className="oficina-card__email">
                  {oficina.email}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="contacto-directo">
        <h3 className="contacto-directo__titulo">Contacto directo</h3>
        <a href="mailto:hola@nexova.cl" className="contacto-directo__email">
          hola@nexova.cl
        </a>
        <p className="contacto-directo__horario">
          Lunes a viernes, 9:00 a 18:30 hrs (GMT-3)
        </p>
      </div>
    </div>
  )
}

export default Contacto