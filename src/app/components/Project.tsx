import { Button } from '@/stories/Button';
import Image from 'next/image'
import locationIcon from '../../../public/location-icon-white.png'
import Icon from '../utils/icons/Icon';
import IconList from './IconList';
interface link {
  href: string;
  label: string;
}

interface Icon {
  url: string;
  imageUrl: string;
}

interface ProjectProps {
  title: string;
  company?: string;
  companyUrl: string;
  image: string;
  location?: string;
  stack: Icon[];
  links?: link[];
}

export const Project = ({ title, company, companyUrl, image, location, stack, links }: ProjectProps) => {
  return (
    <section className="h-auto bg-black m-12 px-16 pt-0 pb-[10vh] px-0 border-b-[gray] border-b border-solid">
      <div className='flex justify-between w-full'>
        <div className='flex flex-col gap-[20px] w-full'>
          <Image src={image} width={600} height={600} alt={`${company}`} />
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
            <div className='w-full'>
              <IconList icons={stack} />
            </div>
          </div>
        </article>
      </div>
      <div className='mt-[7.5vh] flex flex-col gap-[15px]'>
      {links && <p className='text-lg'>See it live:</p>}
            {links && links.map((link, index) => {
              return (
                <div key={index} className='flex flex-col gap-[10px] w-full items-center'>
                  <div className={'flex flex-col gap-[10px] items-center'}>
                    <a href={link.href} target='_blank' rel='noreferrer' className='no-underline w-[fit-content] uppercase text-sm hover:[cursor-pointer]'>
                      <Button className='min-w-[25vw] justify-center' size="large" primary={false} label={link.label}/>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
    </section>
  )
}