import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { T } from '../i18n'
import { CONTACT, NAV_LINKS } from '../constants'
import { SunIcon, MoonIcon } from './icons'
import './Navbar.css'

export default function Navbar() {
  const { dark, toggleDark, lang, toggleLang } = useApp()
  const t = T[lang].nav

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Estudios Roma" className="navbar__logo logo-main" />
        </a>

        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ href, key }) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>{t[key]}</a>
            </li>
          ))}
          <li>
            <a href={CONTACT.call} className="btn btn-primary btn--sm">
              {t.cta}
            </a>
          </li>
        </ul>

        <div className="navbar__controls">
          <button className="toggle-btn" onClick={toggleDark} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="toggle-btn toggle-btn--lang" onClick={toggleLang} aria-label="Toggle language">
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>

        <button
          className={`navbar__hamburger${open ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
