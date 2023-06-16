import Image from 'next/image'

export default function Tools() {
  return (
    <section className="h-auto bg-white">
      <h1 className='text-center m-16 text-[3rem] text-black font-heading font-bold'>Stack</h1>
      <div className='grid text-center justify-center grid-cols-[repeat(4,1fr)] m-0 px-[10vw] pb-[15vh] gap-[50px] [&>a]:transition ease-in-out [&>a:hover]:drop-shadow-md transition ease-in-out'>
        <a href='https://reactjs.org/' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' alt='react' width='96' height='96' />
        </a>
        <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' alt='typescript' width='96' height='96' />
        </a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' alt='javascript' width='96' height='96' />
        </a>
        <a href='https://sass-lang.com' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg' alt='sass' width='96' height='96' />
        </a>
        <a href='https://www.w3.org/html/' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' alt='html5' width='96' height='96' />
        </a>
        <a href='https://www.w3schools.com/css/' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' alt='css3' width='96' height='96' />
        </a>
        <a href='https://tailwindcss.com' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' alt='tailwind' width='96' height='96' />
        </a>
        <a href='https://jestjs.io' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg' alt='jest' width='96' height='96' />
        </a>
        <a href='https://storybook.js.org/' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://www.svgrepo.com/show/354397/storybook-icon.svg' alt='storybook' width='96' height='96' />
        </a>
        <a href='https://www.figma.com/' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://www.vectorlogo.zone/logos/figma/figma-icon.svg' alt='figma' width='96' height='96' />
        </a>
        <a href='https://react-redux.js.org/' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://cdn.worldvectorlogo.com/logos/redux.svg' alt='redux' width='96' height='96' />
        </a>
        <a href='https://postman.com' target='_blank' rel='noreferrer' className='flex place-content-center'>
          <Image src='https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' alt='postman' width='96' height='96' />
        </a>
      </div>

    </section>
  )
}