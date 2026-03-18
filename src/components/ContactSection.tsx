import { PORTFOLIO_DATA as D } from '@/data/portfolio'

export default function ContactSection() {
  return (
    <section className="sec" id="contact">
      <div className="s-eye rv">Get In Touch</div>
      <div className="contact-wrap">
        <div className="rv">
          <h2 className="c-hl">
            <span className="strk">Let&apos;s</span><br />
            <span className="clr">Build</span><br />
            <span className="strk">Together</span>
          </h2>
          <p className="c-sub">
            I&apos;m <strong>actively looking</strong> for new opportunities — full-time, freelance, or remote.
            Reply within 24 hours. Let&apos;s build something great.
          </p>
          <a href={`mailto:${D.email}`} className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send a Message
          </a>
        </div>

        <div className="cc-list rv d2">
          <a href={`mailto:${D.email}`} className="cc">
            <div className="cc-ico">✉</div>
            <div>
              <div className="cc-lbl">Email</div>
              <div className="cc-val">{D.email}</div>
            </div>
            <div className="cc-arr">→</div>
          </a>
          <a href={`tel:${D.phone.replace(/\s/g, '')}`} className="cc">
            <div className="cc-ico">📞</div>
            <div>
              <div className="cc-lbl">Phone</div>
              <div className="cc-val">{D.phone}</div>
            </div>
            <div className="cc-arr">→</div>
          </a>
          <a href={D.linkedin} target="_blank" rel="noreferrer" className="cc">
            <div className="cc-ico">in</div>
            <div>
              <div className="cc-lbl">LinkedIn</div>
              <div className="cc-val">linkedin.com/in/saukatali5200</div>
            </div>
            <div className="cc-arr">→</div>
          </a>
          <a href={D.github} target="_blank" rel="noreferrer" className="cc">
            <div className="cc-ico">GH</div>
            <div>
              <div className="cc-lbl">GitHub</div>
              <div className="cc-val">github.com/saukatali5200</div>
            </div>
            <div className="cc-arr">→</div>
          </a>
          <div className="cc">
            <div className="cc-ico">📍</div>
            <div>
              <div className="cc-lbl">Location</div>
              <div className="cc-val">Jaipur, Rajasthan, India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
