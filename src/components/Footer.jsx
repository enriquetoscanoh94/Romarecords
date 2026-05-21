import { useApp } from '../context/AppContext'
import { T } from '../i18n'
import { CONTACT, NAV_LINKS } from '../constants'
import './Footer.css'

export default function Footer() {
  const { lang } = useApp()
  const t = T[lang].footer
  const nav = T[lang].nav
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Estudios Roma" className="logo-footer" />
            <p className="footer__tagline">{t.tagline}</p>
          </div>

          <nav className="footer__nav">
            <p className="footer__nav-title">{t.pages}</p>
            {NAV_LINKS.map(({ href, key }) => (
              <a key={href} href={href}>{nav[key]}</a>
            ))}
          </nav>

          <div className="footer__social">
            <p className="footer__social-title">{t.connect}</p>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={CONTACT.call}>{t.phone}</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Estudios Roma. {t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
