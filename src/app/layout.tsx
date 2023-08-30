import './globals.css'
import { Poppins } from 'next/font/google';

const poppinsFont = Poppins({
  weight: ['500'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Igor Nogueira - Front End Engineer',
  description: 'Portfolio of Igor Nogueira, Front End Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${poppinsFont.className} no-scrollbar`}>{children}</body>
    </html>
  )
}
