'use client'
import { useEffect, useState } from 'react'

const THEMES = [
  { key: 'ocean', label: 'Ocean' },
  { key: 'ember', label: 'Ember' },
  { key: 'jade', label: 'Jade' },
]

export default function ThemeSwitcher() {
  const [active, setActive] = useState('ocean')

  useEffect(() => {
    const saved = localStorage.getItem('rsa_theme') || 'ocean'
    const valid = THEMES.map(t => t.key).includes(saved) ? saved : 'ocean'
    if (saved !== valid) localStorage.setItem('rsa_theme', valid)
    setActive(valid)
    document.documentElement.setAttribute('data-theme', valid)
  }, [])

  const setTheme = (t: string) => {
    setActive(t)
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem('rsa_theme', t)
  }

  return (
    <aside className="theme-sw">
      <div className="theme-pill">
        {THEMES.map(({ key, label }) => (
          <button
            key={key}
            className={`t-btn${active === key ? ' active' : ''}`}
            data-t={key}
            data-label={label}
            onClick={() => setTheme(key)}
            aria-label={label}
          />
        ))}
      </div>
    </aside>
  )
}
