import Image from 'next/image'
import { Project } from './Project'

export default function Projects() {
  return (
    <section className="h-auto bg-black mt-12">
      <h1 className='text-center mb-16 text-[3rem] font-heading font-bold'>Experiences</h1>
      <Project
        title={'Web Developer Junior'}
        company={'Big Box Outlet Store'}
        image={'/bbos.png'}
        location={'Vancouver, BC, Canada'}
        stack={'HTML5 / CSS3 / JavaScript / jQuery / Shopify'}
        links={[
          {
            href: 'https://bigboxoutletstore.ca/',
            label: 'Big Box Outlet Store - E-commerce'
          }
        ]}
      />
      <Project
        title={'Front End Developer Junior'}
        company={'Enext Consulting'}
        image={'/enext.png'}
        location={'São Paulo, SP, Brazil'}
        stack={'HTML5 / CSS3 / RestAPI / JavaScript / jQuery / React'}
        links={[
          {
            href: 'https://site.getnet.com.br/',
            label: 'GetNet Store'
          },
          {
            href: 'https://www.loreal-paris.com.br/',
            label: 'Loreal Paris Brasil'
          }
        ]}
      />
      <Project
        title={'Front End Developer Intermediate'}
        company={'Sami'}
        image={'/sami.png'}
        location={'São Paulo, SP, Brazil'}
        stack={'JavaScript / TypeScript / React / Redux / RestAPI / SASS'}
        links={[
          {
            href: 'https://www.samisaude.com.br/',
            label: 'Sami Saúde - Healthcare platform'
          }
        ]}
      />
      <Project
        title={'Front End Developer Intermediate'}
        company={'IntellectEU'}
        image={'/intellecteu.png'}
        location={'Antwerp, Belgium'}
        stack={' JavaScript / TypeScript / React / Redux / RestAPI / SASS / Styled Components'}
      />
      <Project
        title={'Front End Developer Mid-Senior'}
        company={'YJCollective'}
        image={'/yjc.png'}
        location={'London, UK'}
        stack={'NextJS / TypeScript / TailwindCSS / React / RestAPI / Jest / React Testing Library / ZOD'}
        links={[
          {
            href: 'https://alteam-portal-git-main-igornog.vercel.app/',
            label: 'Alteam - Freelancing platform'
          },
          {
            href: 'https://solo-sixty.vercel.app/login',
            label: 'SoloSixty - Wellness platform'
          }
        ]}
      />
    </section>
  )
}