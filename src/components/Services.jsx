import { useApp } from '../context/AppContext'
import { T } from '../i18n'
import { MicIcon, MusicIcon, HeadphonesIcon } from './icons'
import './Services.css'

const ICONS = { mic: MicIcon, music: MusicIcon, headphones: HeadphonesIcon }

export default function Services() {
  const { lang } = useApp()
  const t = T[lang].services

  return (
    <section id="services" className="section section--gray">
      <div className="container">
        <div className="section-header">
          <p className="section-label">{t.label}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="services__grid">
          {t.items.map(({ icon, title, description }) => {
            const Icon = ICONS[icon]
            if (!Icon) return null
            return (
              <div key={icon} className="service-card">
                <div className="service-card__icon"><Icon /></div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__desc">{description}</p>
                <div className="service-card__bar" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
