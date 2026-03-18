'use client'
import HeroCanvas from './HeroCanvas'
import { PORTFOLIO_DATA as D } from '@/data/portfolio'
import { AVATAR_BASE64 } from '@/data/avatarBase64'
import { RESUME_BASE64 } from '@/data/resumeBase64'

function downloadResume() {
  const base64 = RESUME_BASE64.split(',')[1]
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  const blob = new Blob([bytes], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Raseed_Saukat_Ali_Resume.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <HeroCanvas />
      <div className="hero-vignette" />
      <div className="hero-deco">R</div>

      <div className="hero-body">
        {/* Avatar */}
        <div className="hero-avatar-wrap">
          <div className="avatar-frame">
            <div className="avatar-frame-glow" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={AVATAR_BASE64}
              alt="Raseed Saukat Ali"
              className="avatar-photo"
            />
          </div>
          <div className="avatar-status">Open to Work</div>
        </div>

        {/* Text */}
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            Full-Stack Developer · {D.location}
          </div>
          <h1 className="hero-h1">
            <span className="clip-line"><span className="clip-inner">Raseed</span></span>
            <span className="clip-line"><span className="clip-inner">Saukat</span></span>
            <span className="clip-line"><span className="clip-inner">Ali.</span></span>
          </h1>
          <p className="hero-sub">
            <strong>4+ years building production-grade web apps</strong> — Laravel, CodeIgniter, Node.js &amp; React.
            E-commerce, AI portals, REST APIs, payment gateways &amp; global clients.
          </p>
          <div className="hero-btns">
            <a href={`mailto:${D.email}`} className="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Hire Me
            </a>
            <button onClick={downloadResume} className="btn btn-download">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </button>
            <a href={D.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
              in &nbsp;LinkedIn
            </a>
            <a href={D.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 15, height: 15 }}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        {D.stats.map((s, i) => (
          <div key={i} className="hstat">
            <div className="hstat-n">{s.number}</div>
            <div className="hstat-l">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
