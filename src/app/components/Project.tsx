import { Button } from '@/stories/Button';
import Image from 'next/image'
import locationIcon from '../../../public/location-icon-white.png'
interface link {
  href: string;
  label: string;
}

interface ProjectProps {
  title: string;
  company?: string;
  image: string;
  location?: string;
  stack?: string;
  links?: link[];
}

export const Project = ({ title, company, image, location, stack, links }: ProjectProps) => {
  return (
    <section className="h-auto bg-black m-12 px-16 pt-0 pb-[10vh] px-0 border-b-[gray] border-b border-solid">
      <div className='flex justify-between w-full'>
        <Image src={image} width={600} height={600} alt={`${company}`} />
        <article className='justify-around-center flex flex-col items-start w-full ml-12 gap-[2rem]'>
          <div className='flex flex-col'>
            <h2 className='font-heading text-[2rem] text-start font-bold font-body'>{title}</h2>
            <h2 className='font-heading text-[1.5rem] text-start'>{company}</h2>
            <p className='flex text-sm items-center mt-2'>
              <Image src={locationIcon} width={30} height={30} alt={'location'} className='relative right-[5px] mr-[-5px]'/>
              {location}
            </p>
          </div>
          <p className='text-start text-sm flex flex-col'>Main stack: <span>{stack}</span></p>
          <div className='flex flex-col gap-[20px] w-full'>
            {links && links.map((link, index) => {
              return (
                <div key={index} className='flex flex-col gap-[10px] w-full max-w-[75%]'>
                  <div className={`${links.length > 1 ? 'flex items-baseline gap-[10px]': 'w-[fit-content]'}`}>
                    {links.length > 1 && <p className='text-sm'>{link.label}:</p>}
                    <a href={link.href} target='_blank' rel='noreferrer' className='no-underline w-[fit-content] uppercase text-sm'>
                      <Button size="small" primary={false} label="See it live"  />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}