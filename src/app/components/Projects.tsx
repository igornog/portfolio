import Image from 'next/image'
import { Project } from './Project'

export default function Projects() {
  return (
    <section className="h-auto bg-black mt-12 mb-12">
      <Project title={'Web Developer Junior at Big Box Outlet Store'} image={'/bbos.png'} />
      <Project title={'Front End Developer Junior at Enext Consulting'} image={'/enext.png'} />
      <Project title={'Front End Developer Intermediate at Sami'} image={'/sami.png'} />
      <Project title={'Front End Developer Intermediate at IntellectEU'} image={'/intellecteu.png'} />
      <Project title={'Front End Developer Mid-Senior at YJ Collective'} image={'/yjc.png'} />
    </section>
  )
}