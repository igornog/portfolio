import Image from 'next/image'

interface ProjectProps {
    title: string;
    image: string;
}

export const Project = ({ title, image }: ProjectProps) => {
  return (
    <section className="h-auto bg-black m-12 px-24">
      <div className='flex justify-between items-center w-full'>
        <Image src={image} width={600} height={600} alt="Big Box Outlet Store" />
        <article className='justify-center flex items-center w-full'>
        <h2>{title}</h2>
      </article>
      </div>
    </section>
  )
}