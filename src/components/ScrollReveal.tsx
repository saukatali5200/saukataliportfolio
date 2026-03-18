'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const rvEls = document.querySelectorAll('.rv')
    const rvObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('show'); rvObs.unobserve(e.target) }
      })
    }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' })
    rvEls.forEach(el => rvObs.observe(el))
    setTimeout(() => rvEls.forEach(el => el.classList.add('show')), 2500)

    // Magnetic buttons
    const btns = document.querySelectorAll<HTMLElement>('.btn')
    btns.forEach(btn => {
      const onMove = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect()
        const dx = (e.clientX - r.left - r.width / 2) * .25
        const dy = (e.clientY - r.top - r.height / 2) * .35
        btn.style.transform = `translate(${dx}px,${dy}px)`
      }
      const onLeave = () => { btn.style.transform = '' }
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
    })

    return () => rvObs.disconnect()
  }, [])

  return null
}
