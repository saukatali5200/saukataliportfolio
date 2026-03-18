'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx, ry = my
    let curReady = false

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (!curReady) {
        curReady = true
        document.body.classList.add('cur-init')
        dot.style.opacity = '1'
        ring.style.opacity = '.45'
      }
    }

    document.addEventListener('mousemove', onMove)

    const hoverEls = document.querySelectorAll('a,button,.sk-row,.exp-item,.bc,.cc,.proj-card,.tc')
    const addBig = () => document.body.classList.add('cur-big')
    const removeBig = () => document.body.classList.remove('cur-big')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addBig)
      el.addEventListener('mouseleave', removeBig)
    })

    let animId: number
    const loop = () => {
      dot.style.left = mx + 'px'; dot.style.top = my + 'px'
      rx += (mx - rx) * .1; ry += (my - ry) * .1
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      document.removeEventListener('mousemove', onMove)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', addBig)
        el.removeEventListener('mouseleave', removeBig)
      })
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div id="cur-dot" ref={dotRef} />
      <div id="cur-ring" ref={ringRef} />
    </>
  )
}
