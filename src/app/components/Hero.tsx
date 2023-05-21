import { Button } from "@/stories/Button";
import GradientBackground from "./GradientBackground";
import githubIcon from '../../../public/github-icon.svg'
import linkedinIcon from '../../../public/linkedin-icon.svg'

export default function Footer() {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center">
      <div className='flex gap-[10px] mb-12 absolute mt-12 top-0'>
        <a href="https://www.linkedin.com/in/igor-nogueira-631284a2/" target="_blank" rel="noreferrer">
          <Button size="small" label="Linkedin" icon={linkedinIcon}/>
        </a>
        <a href="https://github.com/igornog" target="_blank" rel="noreferrer">
          <Button size="small" primary={false} label="Github" icon={githubIcon} />
        </a>
      </div>
      <h1 className='text-[2rem]'>{'Igor Nogueira'}</h1>
      <GradientBackground text={['Front.', 'End.', 'Development.']} />
      {/* <GradientBackground text={['Front.', 'End.', 'Development.']} /> */}
      {/* <GradientBackground text={['Front.', 'End.', 'Development.']} /> */}
      <p className='absolute mb-[2vh] bottom-0'>scroll down</p>
    </section>
  )
}