import { Button } from '@/stories/Button';
import Image from 'next/image'
import locationIcon from '../../../public/location-icon-white.png'
import Icon from '../utils/icons/Icon';
interface link {
  href: string;
  label: string;
}

interface ProjectProps {
  title: string;
  company?: string;
  companyUrl: string;
  image: string;
  location?: string;
  stack?: React.ReactNode[];
  links?: link[];
}

export const Project = ({ title, company, companyUrl, image, location, stack, links }: ProjectProps) => {
  return (
    <section className="h-auto bg-black m-12 px-16 pt-0 pb-[10vh] px-0 border-b-[gray] border-b border-solid">
      <div className='flex justify-between w-full'>
        <div className='flex flex-col gap-[20px] w-full'>
          <Image src={image} width={600} height={600} alt={`${company}`} />
          <div className='mt-4 mb-4 flex flex-col gap-[15px]'>
          {links && links.map((link, index) => {
            return (
              <div key={index} className='flex flex-col gap-[10px] w-full'>
                <div className={'flex items-baseline gap-[10px]'}>
                  <p className='text-sm'>{link.label}:</p>
                  <a href={link.href} target='_blank' rel='noreferrer' className='no-underline w-[fit-content] uppercase text-sm'>
                    <Button size="medium" primary={false} label="See it live" />
                  </a>
                </div>
              </div>
            )
          })}
          </div>
        </div>
        <article className='justify-around-center flex flex-col items-start w-full ml-12 gap-[2rem]'>
          <div className='flex flex-col'>
            <h2 className='font-heading text-[2rem] text-start font-bold font-body'>{title}</h2>
            <h2 className='font-heading text-[1.5rem] text-start flex items-center gap-[5px]'>
              {company}
              <Icon small url={companyUrl} imageUrl={'https://img.icons8.com/?size=512&id=60664&format=png&color=FFFFFF'} />
            </h2>
            <p className='flex text-sm items-center mt-2'>
              <Image src={locationIcon} width={30} height={30} alt={'location'} className='relative right-[5px] mr-[-5px]' />
              {location}
            </p>
          </div>
          <div className='text-left w-full'>
            <p>Stack:</p>
            <div className='flex gap-[10px] flex-wrap w-full max-w-[50%]'>
              {stack && stack.map((item, index) => {
                return item
              })}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}