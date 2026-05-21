import { useApp } from '../context/AppContext'
import { T } from '../i18n'
import { CONTACT } from '../constants'
import { CallIcon, TextIcon, WhatsAppIcon, InstagramIcon, ArrowIcon } from './icons'
import './Contact.css'

const CHANNELS = [
  { id: 'call',      href: CONTACT.call,      Icon: CallIcon,      external: false },
  { id: 'text',      href: CONTACT.sms,       Icon: TextIcon,      external: false },
  { id: 'whatsapp',  href: CONTACT.whatsapp,  Icon: WhatsAppIcon,  external: true  },
  { id: 'instagram', href: CONTACT.instagram, Icon: InstagramIcon, external: true  },
]

export default function Contact() {
  const { lang } = useApp()
  const t = T[lang].contact

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header section-header--center">
          <p className="section-label">{t.label}</p>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="contact__grid">
          {CHANNELS.map(({ id, href, Icon, external }) => {
            const { label, value } = t.channels[id]
            return (
              <a
                key={id}
                href={href}
                className="contact-card"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="contact-card__icon"><Icon size={26} /></div>
                <div className="contact-card__text">
                  <span className="contact-card__label">{label}</span>
                  <span className="contact-card__value">{value}</span>
                </div>
                <div className="contact-card__arrow"><ArrowIcon size={18} /></div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
