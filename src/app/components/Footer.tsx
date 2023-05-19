import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full justify-between m-8">
      <p className='m-4 font-heading font-bold'>Languages and Tools:</p>
      <div className='flex gap-[10px] mb-16'>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="48" height="48" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="48" height="48" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
          <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="48" height="48" />
        </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="48" height="48" />
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
          <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="48" height="48" />
        </a>
        <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
          <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="48" height="48" />
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="tailwind" width="48" height="48" />
        </a>
        <a href="https://jestjs.io" target="_blank" rel="noreferrer">
          <Image src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="48" height="48" />
        </a>
        <a href="https://storybook.js.org/" target="_blank" rel="noreferrer">
          <Image src="https://www.svgrepo.com/show/354397/storybook-icon.svg" alt="storybook" width="48" height="48" />
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="48" height="48" />
        </a>
        <a href="https://www.invisionapp.com/" target="_blank" rel="noreferrer">
          <Image src="https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg" alt="invision" width="48" height="48" />
        </a>
        <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noreferrer">
          <Image src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="xd" width="48" height="48" />
        </a>
        <a href="https://postman.com" target="_blank" rel="noreferrer">
          <Image src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="48" height="48" />
        </a>
      </div>
      Made with <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={144}
        height={36}
        priority
      />
    </footer>
  )
}