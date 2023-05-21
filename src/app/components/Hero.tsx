import { Button } from "@/stories/Button";
import GradientBackground from "./GradientBackground";
import githubIcon from '../../../public/github-icon.svg'
import linkedinIcon from '../../../public/linkedin-icon.svg'

export default function Footer() {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-start">
      <div className='flex gap-[10px] mb-12'>
        <a href="https://www.linkedin.com/in/igor-nogueira-631284a2/" target="_blank" rel="noreferrer">
          <Button size="small" label="Linkedin" icon={linkedinIcon}/>
        </a>
        <a href="https://github.com/igornog" target="_blank" rel="noreferrer">
          <Button size="small" primary={false} label="Github" icon={githubIcon} />
        </a>
        <>
        {console.log('test')}
        </>
      </div>
      <GradientBackground text={['Front.', 'End.', 'Developer.']} />
      <GradientBackground text={['Front.', 'End.', 'Developer.']} />
      <GradientBackground text={['Front.', 'End.', 'Developer.']} />
    </section>
  )
}