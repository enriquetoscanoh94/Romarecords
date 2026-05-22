import { useApp } from '../context/AppContext'
import { T } from '../i18n'
import { CONTACT } from '../constants'
import './Gallery.css'

export default function Gallery() {
  const { lang } = useApp()
  const t = T[lang].gallery

  return (
    <section id="gallery" className="section section--gray">
      <div className="container">
        <div className="section-header">
          <p className="section-label">{t.label}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="gallery__video-item">
          <video
            src={`${import.meta.env.BASE_URL}presentacion.mp4`}
            controls
            preload="metadata"
          />
        </div>

        <p className="gallery__note">
          {t.note}&nbsp;
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
            @estudios_roma
          </a>
        </p>
      </div>
    </section>
  )
}
