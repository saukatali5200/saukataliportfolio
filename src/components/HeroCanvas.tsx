'use client'
import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const c = cv.getContext('2d')
    if (!c) return

    // let W: number, H: number
    let W = window.innerWidth
    let H = window.innerHeight
    const dots: Dot[] = []

    function resize() {
      W = cv!.width = window.innerWidth
      H = cv!.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Dot {
      x = 0; y = 0; vx = 0; vy = 0; r = 0; a = 0; life = 0; max = 0

      constructor() { this.init(true) }

      init(rand: boolean) {
        this.x = Math.random() * W
        this.y = rand ? Math.random() * H : H + 5
        this.vx = (Math.random() - .5) * .18
        this.vy = -(Math.random() * .45 + .1)
        this.r = Math.random() * 1.3 + .25
        this.a = Math.random() * .38 + .04
        this.life = 0
        this.max = 320 + Math.random() * 380
      }

      tick() {
        this.x += this.vx; this.y += this.vy; this.life++
        if (this.life > this.max || this.y < -8) this.init(false)
      }

      draw() {
        const al = this.a * Math.min(1, this.life / 70) * Math.min(1, (this.max - this.life) / 70)
        c!.beginPath(); c!.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        c!.fillStyle = `rgba(255,255,255,${al})`; c!.fill()
      }
    }

    for (let i = 0; i < 90; i++) dots.push(new Dot())

    let animId: number

    ;(function frame() {
      c.clearRect(0, 0, W, H)
      const g1 = c.createRadialGradient(W * .22, H * .38, 0, W * .22, H * .38, W * .52)
      g1.addColorStop(0, 'rgba(0,150,255,.07)'); g1.addColorStop(1, 'transparent')
      c.fillStyle = g1; c.fillRect(0, 0, W, H)
      const g2 = c.createRadialGradient(W * .78, H * .65, 0, W * .78, H * .65, W * .42)
      g2.addColorStop(0, 'rgba(0,220,180,.05)'); g2.addColorStop(1, 'transparent')
      c.fillStyle = g2; c.fillRect(0, 0, W, H)
      for (let i = 0; i < dots.length; i++) {
        dots[i].tick(); dots[i].draw()
        for (let j = i + 1; j < dots.length; j++) {
          const d = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y)
          if (d < 110) {
            c.beginPath(); c.moveTo(dots[i].x, dots[i].y); c.lineTo(dots[j].x, dots[j].y)
            c.strokeStyle = `rgba(255,255,255,${.022 * (1 - d / 110)})`; c.lineWidth = .5; c.stroke()
          }
        }
      }
      animId = requestAnimationFrame(frame)
    })()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas id="heroCanvas" ref={canvasRef} />
}
