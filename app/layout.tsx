import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neurodiversity Vibes - Salvador James',
  description: 'Explore Salvador James\' EP "Neurodiversity Vibes"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <header className="p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center">Neurodiversity Vibes - Salvador James</h1>
          </header>
          <main className="container mx-auto p-4">
            {children}
          </main>
          <footer className="p-4 text-center text-sm text-gray-500">
            © 2024 Salvador James. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}