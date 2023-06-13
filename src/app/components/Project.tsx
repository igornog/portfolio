import Image from 'next/image'

interface link {
  href: string;
  label: string;
}

interface ProjectProps {
  title: string;
  company?: string;
  image: string;
  stack?: string;
  link?: link[];
}

export const Project = ({ title, company, image, stack, link }: ProjectProps) => {
  return (
    <section className="h-auto bg-black m-12 px-24 pt-0 pb-[10vh] px-0 border-b-[gray] border-b border-solid">
      <div className='flex justify-between w-full'>
        <Image src={image} width={600} height={600} alt={`${company}`} />
        <article className='justify-around-center flex flex-col items-start w-full ml-12 gap-[2rem]'>
          <div className='flex flex-col'>
            <h2 className='font-heading text-[2rem] text-start font-bold font-body'>{title}</h2>
            <h2 className='font-heading text-[1.5rem] text-start'>{company}</h2>
          </div>
          <p className='text-start'>{stack}</p>
          <div className='flex gap-[10px]'>
            {link && link.map((link, index) => {
              return (
                <div key={index} className='flex gap-[10px]'>
                  <div className='flex text-sm flex-col items-center mb-[10px] border p-4 rounded-[10px]'>
                    <p>{link.label}</p>
                    <a href={link.href} target='_blank' rel='noreferrer' className='underline w-[fit-content]'>
                      {`See it live`}
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