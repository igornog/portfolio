import Image from 'next/image'
import githubIcon from '../../../public/github-icon.svg'
import linkedinIcon from '../../../public/linkedin-icon.svg'
import { Button } from '@/stories/Button'
import arrowIcon from '../../../public/arrow.png'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center text-center justify-between m-8 gap-[10px]'>
      {'Check my socials:'}
      <div className='flex gap-[10px] mb-12'>
        <a href="https://www.linkedin.com/in/igor-nogueira-631284a2/" target="_blank" rel="noreferrer">
          <Button size="small" label="Linkedin" icon={linkedinIcon} />
        </a>
        <a href="https://github.com/igornog" target="_blank" rel="noreferrer">
          <Button size="small" primary={false} label="Github" icon={githubIcon} />
        </a>
      </div>

      <a href='#page'>
        <p className='absolute right-12 flex flex-col items-center'>
          <Image src={arrowIcon} width={30} height={30} alt={'arrow'} className='rotate-180' />
          Top
        </p>
      </a>

      {'Made with'} <Image
        className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
        src='/next.svg'
        alt={`Next.js Logo`}
        width={144}
        height={44}
        priority
      />
    </footer>
  )
}