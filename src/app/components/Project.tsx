import Image from 'next/image'

interface ProjectProps {
    title: string;
    company?: string;
    image: string;
    stack?: string;
}

export const Project = ({ title, company, image, stack }: ProjectProps) => {
  return (
    <section className="h-auto bg-black m-12 px-24 pt-0 pb-[10vh] px-0 border-b-[gray] border-b border-solid">
      <div className='flex justify-between w-full'>
        <Image src={image} width={600} height={600} alt="Big Box Outlet Store" />
        <article className='justify-around-center flex flex-col items-start w-full ml-12 gap-[2rem]'>
        <div className='flex flex-col'>
          <h2 className='font-heading text-[2rem] text-start font-bold font-body'>{title}</h2>
          <h2 className='font-heading text-[1.5rem] text-start'>{company}</h2>
        </div>
        <p className='roboto'>{stack}</p>
      </article>
      </div>
    </section>
  )
}