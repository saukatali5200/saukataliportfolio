import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raseed Saukat Ali — Full-Stack Web Developer',
  description: '4+ years building production-grade web apps — Laravel, CodeIgniter, Node.js & React. E-commerce, AI portals, REST APIs, payment gateways & global clients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="ocean" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
