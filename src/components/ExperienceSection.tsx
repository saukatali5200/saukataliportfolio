import { PORTFOLIO_DATA as D } from '@/data/portfolio'

export default function ExperienceSection() {
  return (
    <section className="sec" id="experience">
      <div className="s-eye rv">Career History</div>
      <h2 className="s-ttl rv">Experience &amp; <span className="dim">Work</span></h2>
      <div className="exp-tl">
        {D.experience.map((exp, i) => (
          <div key={i} className={`exp-item rv d${i}`}>
            <div className="exp-date">{exp.period.replace('→', '↓\n↓\n')}</div>
            <div className="exp-dot" />
            <div>
              <div className="exp-co">{exp.company}</div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-loc">📍 {exp.location}</div>
              <div className="exp-desc">{exp.description}</div>
              <div className="exp-tags">
                {exp.tags.map((tag, j) => (
                  <span key={j} className="exp-tag">{tag}</span>
                ))}
              </div>
              {exp.current && (
                <div className="exp-now">Currently Working Here</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
