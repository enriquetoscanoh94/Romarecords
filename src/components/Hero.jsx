import { useApp } from '../context/AppContext'
import { T } from '../i18n'
import { CONTACT } from '../constants'
import { WhatsAppIcon } from './icons'
import './Hero.css'

export default function Hero() {
  const { lang } = useApp()
  const t = T[lang].hero
  const cta = T[lang].nav.cta

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Estudios Roma" className="hero__logo logo-main" />
        <div className="hero__divider" />
        <h1 className="hero__title">
          {t.title[0]}<br />{t.title[1]}
        </h1>
        <p className="hero__subtitle">
          {t.subtitle}
          <span>{t.location}</span>
        </p>
        <div className="hero__actions">
          <a href={CONTACT.call} className="btn btn-primary">{cta}</a>
          <a href={CONTACT.whatsapp} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={17} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
