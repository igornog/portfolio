import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center text-center justify-between m-8 gap-[10px]'>
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