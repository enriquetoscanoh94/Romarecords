import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [dark, setDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  )
  const [lang, setLang] = useState(
    () => localStorage.getItem('lang') || 'en'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleDark = () => setDark(v => !v)
  const toggleLang = () => setLang(v => (v === 'en' ? 'es' : 'en'))

  return (
    <AppContext.Provider value={{ dark, toggleDark, lang, toggleLang }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
