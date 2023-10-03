import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import Navbar from '@/components/Navbar'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Elevation Church',
    description: 'Elevation Church',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={mulish.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
