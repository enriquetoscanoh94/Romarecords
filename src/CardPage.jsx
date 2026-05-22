import { useState, useEffect } from 'react'
import { PHONE, CONTACT } from './constants'
import { T } from './i18n'
import {
  CallIcon, TextIcon, WhatsAppIcon, InstagramIcon, GlobeIcon,
  ArrowIcon, SaveIcon, NfcIcon, SunIcon, MoonIcon,
} from './components/icons'

function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Estudios Roma',
    'ORG:Estudios Roma',
    `TEL;TYPE=CELL:+${PHONE}`,
    'URL:https://romarecords.llc',
    'NOTE:Live Recording for Bands\\, Groups & Norteño. Northern California & Bay Area.',
    'END:VCARD',
  ].join('\n')

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'estudios-roma.vcf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

const ACTIONS = [
  { id: 'call',        href: CONTACT.call,             Icon: CallIcon,      external: false, value: null                  },
  { id: 'text',        href: CONTACT.sms,              Icon: TextIcon,      external: false, value: null                  },
  { id: 'whatsapp',    href: CONTACT.whatsapp,         Icon: WhatsAppIcon,  external: true,  value: null                  },
  { id: 'ig-personal', href: CONTACT.instagramPersonal,Icon: InstagramIcon, external: true,  value: '@naza.wav'           },
  { id: 'ig-studio',   href: CONTACT.instagram,        Icon: InstagramIcon, external: true,  value: '@estudios_roma'      },
  { id: 'website',     href: 'https://romarecords.llc',Icon: GlobeIcon,     external: true,  value: 'romarecords.llc'     },
]

export default function CardPage() {
  const [lang, setLang] = useState('en')
  const [saved, setSaved] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const t = T[lang].card

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const actionLabels = {
    call: t.call, text: t.text, whatsapp: t.whatsapp,
    'ig-personal': t.instagramPersonal,
    'ig-studio': t.instagram,
    website: t.website,
  }

  const handleSave = () => {
    downloadVCard()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="card-page">
      <div className="card-controls">
        <button
          className="card-lang"
          onClick={() => setLang(v => (v === 'en' ? 'es' : 'en'))}
          aria-label="Toggle language"
        >
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
        <button
          className="card-theme"
          onClick={() => setDark(v => !v)}
          aria-label="Toggle dark mode"
        >
          {dark ? <SunIcon size={14} /> : <MoonIcon size={14} />}
        </button>
      </div>

      <div className="card-body">
        <a href="https://romarecords.llc" target="_blank" rel="noopener noreferrer" className="card-logo-wrap">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Estudios Roma" className="card-logo" />
        </a>

        <div className="card-identity">
          <h1 className="card-name">Estudios Roma</h1>
          <p className="card-tagline">{t.tagline}</p>
          <p className="card-specialty">{t.specialty}</p>
        </div>

        <div className="card-divider" />

        <div className="card-actions">
          {ACTIONS.map(({ id, href, Icon, external, value }) => (
            <a
              key={id}
              href={href}
              className="card-action"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="card-action__icon"><Icon size={20} /></span>
              <span className="card-action__text">
                <span className="card-action__label">{actionLabels[id]}</span>
                {value && <span className="card-action__value">{value}</span>}
              </span>
              <span className="card-action__arrow"><ArrowIcon size={16} /></span>
            </a>
          ))}
        </div>

        <button
          className={`card-save${saved ? ' card-save--done' : ''}`}
          onClick={handleSave}
        >
          <SaveIcon size={18} />
          {saved ? t.saved : t.save}
        </button>

        <p className="card-location">
          <span className="card-nfc"><NfcIcon size={16} /></span>
          {t.location}
        </p>
      </div>
    </div>
  )
}
