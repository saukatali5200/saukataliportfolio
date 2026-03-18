import { PORTFOLIO_DATA as D } from '@/data/portfolio'

export default function ProjectsSection() {
  return (
    <section className="fb" id="projects">
      <div className="inner">
        <div className="s-eye rv">Live Work</div>
        <h2 className="s-ttl rv">Real <em>Projects</em></h2>
        <div className="proj-grid">
          {D.projects.map((p, i) => (
            <div key={i} className={`proj-card rv d${(i % 3) + 1}`}>
              <div className="proj-num">{p.num}</div>
              <div className="proj-period">{p.period}</div>
              <div className="proj-name">{p.name}</div>
              <div className="proj-desc">{p.description}</div>
              <div className="proj-tags">
                {p.tags.map((tag, j) => (
                  <span key={j} className="proj-tag">{tag}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">
                View Live ↗
              </a>
            </div>
          ))}

          <div className="proj-card proj-cta rv d3">
            <div className="proj-cta-txt">Want me on your next project?</div>
            <a
              href={`mailto:${D.email}`}
              className="btn btn-outline"
              style={{ background: 'rgba(0,0,0,.3)', color: '#000', borderColor: 'rgba(0,0,0,.3)', alignSelf: 'flex-start' }}
            >
              Get In Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
