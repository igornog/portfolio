import { Header } from '@/stories/Header'
import Image from 'next/image'
import Footer from './components/Footer'
import GradientBackground from './components/GradientBackground'

export default function Home() {
  return (
    <main className="grid h-[100vh] text-center">
      <Header user={{ name: 'Igor Nogueira' }} />
      <GradientBackground text='Igor Nogueira'/>
      <GradientBackground text='Igor Nogueira'/>
      <GradientBackground text='Igor Nogueira'/>
      <Footer />
    </main>
  )
}