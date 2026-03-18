'use client'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('[id]')
      let cur = ''
      sections.forEach(s => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 250) cur = s.id
      })
      if (cur) setActiveId(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="mainNav">
      <a className="logo" href="#hero">
        <div className="logo-dot" />RSA
      </a>
      <div className="nav-links">
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={activeId === href.slice(1) ? 'active' : ''}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <div className="nav-badge">
          <span className="nav-badge-dot" />Available for hire
        </div>
      </div>
    </nav>
  )
}
