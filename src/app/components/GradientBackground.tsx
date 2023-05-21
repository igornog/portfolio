interface GradientBackgroundProps {
  text: string[];
}

const GradientBackground = ({ text }: GradientBackgroundProps) => {
  return (
    <section className='relative flex justify-center items-center bg-transparent transition-shadow duration p-0 rounded-[5px] border-[none] focus:transition-shadow focus:duration focus:shadow-[0px_0px_0px_3px_#ffffff];
    outline: none line-height-30xl'>
      <div className='flex gap-[10px] text-8xl'>
        <h1 className='animate-textGradientAnimation bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-[14rem] font-bold tracking-[-10px]'>{text[0]}</h1>
        <h1 className='animate-textGradientAnimation2 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-[4rem] font-bold tracking-[-2px]'>{text[1]}</h1>
        <h1 className='animate-textGradientAnimation3 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-[4rem] font-bold tracking-[-2px]'>{text[2]}</h1>
      </div>
    </section>
  )
}

export default GradientBackground