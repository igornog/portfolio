import { Header } from '@/stories/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Tools from './components/Tools'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main id='page' className='grid text-center'>
      <section className='h-[100vh]'>
        <Header user={{ name: 'Igor Nogueira' }} />
        <Hero />
      </section>
      <Tools />
      <Projects />
      <Footer />
    </main>
  )
}