import { useApp } from '../context/AppContext'
import { T } from '../i18n'
import './About.css'

export default function About() {
  const { lang } = useApp()
  const t = T[lang].about

  return (
    <section id="about" className="section">
      <div className="container about__inner">
        <div className="about__text">
          <p className="section-label">{t.label}</p>
          <h2 className="section-title">{t.title}</h2>
          <div className="divider"><div className="divider-dot" /></div>
          <p className="about__body">{t.body1}</p>
          <p className="about__body">{t.body2}</p>
          <a href="#contact" className="btn btn-primary about__cta">{t.cta}</a>
        </div>

        <div className="about__visual">
          <div className="about__photo-wrap">
            <img src={`${import.meta.env.BASE_URL}imagen.jpeg`} alt="Estudios Roma recording session" className="about__photo" loading="lazy" />
          </div>
          <div className="about__badge">
            <span>{t.location[0]}</span>
            <span className="about__badge-sep">·</span>
            <span>{t.location[1]}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
