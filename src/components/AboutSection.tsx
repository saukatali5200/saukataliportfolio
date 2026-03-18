import { PORTFOLIO_DATA as D } from '@/data/portfolio'

export default function AboutSection() {
  return (
    <section className="sec" id="about">
      <div className="s-eye rv">Who I Am</div>
      <h2 className="s-ttl rv">About <em>Me</em></h2>
      <div className="bento">
        <div className="bc s7 rv d1">
          <div className="bc-ico">👨‍💻</div>
          <div className="bc-ttl">My Story</div>
          <div className="bc-txt">{D.bio}</div>
        </div>

        <div className="bc s5 ac rv d2">
          <div className="bc-ico">🎓</div>
          <div className="bc-ttl">Education</div>
          <div className="bc-txt">
            {D.education.degree}<br /><br />
            <strong>{D.education.university}</strong><br />
            {D.education.period}
          </div>
        </div>

        <div className="bc s4 rv d1">
          <div className="bc-big">4+</div>
          <div className="bc-big-l">Years Experience</div>
        </div>

        <div className="bc s4 rv d2">
          <div className="bc-big">3</div>
          <div className="bc-big-l">Companies Worked</div>
        </div>

        <div className="bc s4 rv d3">
          <div className="bc-ico">🌍</div>
          <div className="bc-ttl">Languages</div>
          <div className="lang-chips">
            {D.languages.map((lang, i) => (
              <span key={i} className="lc">{lang}</span>
            ))}
          </div>
        </div>

        <div className="bc s8 rv d1">
          <div className="bc-ico">💡</div>
          <div className="bc-ttl">Interests</div>
          <ul className="int-list">
            {D.interests.map((interest, i) => (
              <li key={i}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
