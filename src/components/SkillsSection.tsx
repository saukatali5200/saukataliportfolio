'use client'
import { useEffect, useRef } from 'react'
import { PORTFOLIO_DATA as D } from '@/data/portfolio'

export default function SkillsSection() {
  const fillsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const fills = fillsRef.current
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('go')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })

    fills.forEach(f => { if (f) observer.observe(f) })
    return () => observer.disconnect()
  }, [])

  // Scroll reveal
  useEffect(() => {
    const rvEls = document.querySelectorAll('.rv')
    const rvObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('show'); rvObs.unobserve(e.target) }
      })
    }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' })
    rvEls.forEach(el => rvObs.observe(el))
    setTimeout(() => rvEls.forEach(el => el.classList.add('show')), 2500)
    return () => rvObs.disconnect()
  }, [])

  return (
    <section className="fb" id="skills">
      <div className="inner">
        <div className="s-eye rv">Technical Expertise</div>
        <h2 className="s-ttl rv">Skills &amp; <em>Stack</em></h2>
        <div className="skills-layout rv">
          <div className="skill-list">
            {D.skills.map((sk, i) => (
              <div key={i} className={`sk-row rv d${(i % 3) + 1}`}>
                <div className="sk-nw">
                  <span className="sk-ico">{sk.icon}</span>
                  <div>
                    <div className="sk-nm">{sk.name}</div>
                    <div className="sk-ex">{sk.experience}</div>
                  </div>
                </div>
                <div className="sk-track">
                  <div
                    ref={el => { if (el) fillsRef.current[i] = el }}
                    className="sk-fill"
                    style={{ '--w': `${sk.percent}%`, '--d': `${i * 0.08}s` } as React.CSSProperties}
                  />
                </div>
                <div className="sk-pct">{sk.percent}%</div>
              </div>
            ))}
          </div>
          <div className="skills-side rv">
            <div className="side-card">
              <div className="side-big">4+</div>
              <div className="side-lbl">Years of full-stack Laravel &amp; CodeIgniter across global clients</div>
            </div>
            <div className="side-card">
              <div style={{ marginBottom: '.9rem', fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--tx3)', fontFamily: "'Fira Code', monospace" }}>
                All Tools
              </div>
              <div className="tech-wrap">
                {D.techStack.map((t, i) => (
                  <span key={i} className="tc">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
