import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import MetaPixel from '../components/MetaPixel'
import './globals.css'

const fredoka = Fredoka({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const nunito = Nunito({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Kit Fono Kids | Atividades Prontas para Fonoaudiologia Infantil',
  description:
    'Receba um kit com mais de 100 atividades lúdicas, ilustradas e com objetivo terapêutico, prontas para imprimir e aplicar com crianças. Acesso imediato e vitalício.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1f6fe5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`light ${fredoka.variable} ${nunito.variable} bg-background`}>
      <body className="font-sans antialiased">
        <MetaPixel />

        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
