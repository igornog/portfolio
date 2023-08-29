import { Project } from './Project'
import Icon from '../utils/icons/Icon'

export default function Projects() {
  return (
    <section className="h-auto bg-black mt-12">
      <h1 className='text-center text-[3rem] font-heading font-bold'>Experiences</h1>
      <Project
        title={'Web Developer Junior'}
        company={'Big Box Outlet Store'}
        companyUrl={'https://bbos.ca'}
        image={'/bbos.png'}
        location={'Vancouver, BC, Canada'}
        stack={[
          <Icon url={'https://www.w3.org/html/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'} />,
          <Icon url={'https://www.w3schools.com/css/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'} />,
          <Icon url={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'} />,
          <Icon url={'https://jquery.com/'} imageUrl={'https://cdn.iconscout.com/icon/free/png-512/free-jquery-8-1175153.png?f=avif&w=512'} />,
          <Icon url={'https://shopify.dev/'} imageUrl={'https://img.icons8.com/?size=512&id=uSHYbs6PJfMT&format=png'} />,
        ]}
        links={[
          {
            href: 'https://bigboxoutletstore.ca/',
            label: 'Big Box Outlet Store E-commerce'
          }
        ]}
      />
      <Project
        title={'Front End Developer Junior'}
        company={'Enext Consulting'}
        companyUrl={'https://enext.com.br/'}
        image={'/enext.png'}
        location={'São Paulo, SP, Brazil'}
        stack={[
          <Icon url={'https://www.w3.org/html/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'} />,
          <Icon url={'https://www.w3schools.com/css/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'} />,
          <Icon url={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'} />,
          <Icon url={'https://jquery.com/'} imageUrl={'https://cdn.iconscout.com/icon/free/png-512/free-jquery-8-1175153.png?f=avif&w=512'} />,
          <Icon url={'https://sass-lang.com'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'} />,
          <Icon url={'https://reactjs.org/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'} />,
        ]}
        links={[
          {
            href: 'https://site.getnet.com.br/',
            label: 'GetNet Brasil Store'
          },
          {
            href: 'https://www.loreal-paris.com.br/',
            label: `L'Oréal Paris Brasil`
          }
        ]}
      />
      <Project
        title={'Front End Developer Intermediate'}
        company={'Sami Saúde'}
        companyUrl={'https://www.samisaude.com.br/'}
        image={'/sami.png'}
        location={'São Paulo, SP, Brazil'}
        stack={[
          <Icon url={'https://www.w3.org/html/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'} />,
          <Icon url={'https://www.w3schools.com/css/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'} />,
          <Icon url={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'} />,
          <Icon url={'https://www.typescriptlang.org/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'} />,
          <Icon url={'https://sass-lang.com'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'} />,
          <Icon url={'https://reactjs.org/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'} />,
          <Icon url={'https://react-redux.js.org/'} imageUrl={'https://cdn.worldvectorlogo.com/logos/redux.svg'} />,
        ]}
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
        companyUrl={'https://www.intellecteu.com/'}
        image={'/intellecteu.png'}
        location={'Antwerp, Belgium'}
        stack={[
          <Icon url={'https://www.w3.org/html/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'} />,
          <Icon url={'https://www.w3schools.com/css/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'} />,
          <Icon url={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'} />,
          <Icon url={'https://www.typescriptlang.org/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'} />,
          <Icon url={'https://sass-lang.com'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'} />,
          <Icon url={'https://reactjs.org/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'} />,
          <Icon url={'https://react-redux.js.org/'} imageUrl={'https://cdn.worldvectorlogo.com/logos/redux.svg'} />,
          <Icon url={'https://www.figma.com/'} imageUrl={'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'} />,
        ]}
      />
      <Project
        title={'Front End Developer Mid-Senior'}
        company={'YJCollective'}
        companyUrl={'https://www.yjcollective.com/'}
        image={'/yjc.png'}
        location={'London, UK'}
        stack={[
          <Icon url={'https://www.w3.org/html/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'} />,
          <Icon url={'https://www.w3schools.com/css/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'} />,
          <Icon url={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'} />,
          <Icon url={'https://www.typescriptlang.org/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'} />,
          <Icon url={'https://sass-lang.com'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'} />,
          <Icon url={'https://reactjs.org/'} imageUrl={'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'} />,
          <Icon url={'https://react-redux.js.org/'} imageUrl={'https://cdn.worldvectorlogo.com/logos/redux.svg'} />,
          <Icon url={'https://jestjs.io'} imageUrl={'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg'} />,
          <Icon url={'https://tailwindcss.com'} imageUrl={'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'} />,
          <Icon url={'https://www.figma.com/'} imageUrl={'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'} />,
        ]}
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