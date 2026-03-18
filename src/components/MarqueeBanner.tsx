import { PORTFOLIO_DATA as D } from '@/data/portfolio'

export default function MarqueeBanner() {
  const items = [...D.marqueeItems, ...D.marqueeItems, ...D.marqueeItems, ...D.marqueeItems]

  return (
    <div className="marquee">
      <div className="mq-inner">
        {items.map((t, i) => (
          <span key={i} className="mq-item">
            {t}<span className="mq-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
