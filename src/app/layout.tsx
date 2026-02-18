import type { Metadata } from 'next'
import { Inter, Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingDnevnik } from '@/components/layout/FloatingDnevnik'
import { ThemeProvider } from '@/lib/theme'
import { Phone, Mail } from 'lucide-react'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })
const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair'
})
const sourceSans = Source_Sans_3({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-source-sans'
})

export const metadata: Metadata = {
  title: 'СУ "Св. Климент Охридски" - гр. Пещера',
  description: 'Официален уебсайт на СУ "Св. Климент Охридски", град Пещера.',
}

const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} ${playfair.variable} ${sourceSans.variable} bg-background text-foreground`}>
        <ThemeProvider>
          {/* Top Bar */}
          <div className="bg-background border-b border-border py-2 hidden md:block fixed top-0 w-full z-50 h-10">
            <div className="container mx-auto px-6 flex justify-between items-center text-xs font-medium text-muted-foreground">
              <div className="flex items-center space-x-6">
                <a href="tel:035063641" className="flex items-center hover:text-foreground transition-colors">
                  <Phone className="w-3 h-3 mr-2" /> 0350 6 36 41
                </a>
                <a href="mailto:info-1302630@edu.mon.bg" className="flex items-center hover:text-foreground transition-colors">
                  <Mail className="w-3 h-3 mr-2" /> info-1302630@edu.mon.bg
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span>ул. &quot;Димчо Дебелянов&quot; 4</span>
              </div>
            </div>
          </div>

          <Header />
          <main className="min-h-screen pt-10">
            {children}
          </main>
          <FloatingDnevnik />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
