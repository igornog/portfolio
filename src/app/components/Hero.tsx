import { Button } from "@/stories/Button";
import GradientBackground from "./GradientBackground";

export default function Footer() {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-start">
      <div className='flex gap-[10px] mb-12'>
        <a href="https://www.linkedin.com/in/igor-nogueira-631284a2/" target="_blank" rel="noreferrer">
          <Button size="large" label="Linkedin" />
        </a>
        <a href="https://github.com/igornog" target="_blank" rel="noreferrer">
          <Button size="large" primary={false} label="Github" />
        </a>
      </div>
      <GradientBackground text={['Front.', 'End.', 'Developer.']} />
      <GradientBackground text={['Front.', 'End.', 'Developer.']} />
      <GradientBackground text={['Front.', 'End.', 'Developer.']} />
    </section>
  )
}