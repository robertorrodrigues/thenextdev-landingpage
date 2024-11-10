import type { Metadata } from 'next';
import { Inter as FontSans} from 'next/font/google';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

import { ThemeProvider } from './_components/theme-provider';
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',

})

export const metadata: Metadata = {
  title: 'Titulo da App - Next App',
  description: 'Primeiro next app',
  keywords: [
    'Auditoria',
    'ISO 9000',
    'Creditado',
    'Certificação',
    'Checklist',
    'Automação',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-backgroud font-sans antialiased',
        fontSans.variable,
        fontHeading.variable
      )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>{children}</ThemeProvider>
        </body>
    </html>
  )
}
