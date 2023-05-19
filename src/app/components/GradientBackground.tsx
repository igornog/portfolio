interface GradientBackgroundProps {
  text?: string;
}

const GradientBackground = ({ text }: GradientBackgroundProps) => {
  return (
    <section className="relative flex justify-center items-center cursor-pointer bg-transparent transition-shadow duration p-0 rounded-[5px] border-[none] focus:transition-shadow focus:duration focus:shadow-[0px_0px_0px_3px_#ffffff];
    outline: none line-height-30xl">
      <div className="flex gap-[10px] text-8xl font-bold">
        <h1 className="row-start-1 col-start-1 animate-backgroundanimation1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[5px] before:content-[''] before:absolute text-transparent bg-clip-text">FRONT.</h1>
        <h1 className="row-start-1 col-start-1 animate-backgroundanimation2 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-[5px] before:content-[''] before:absolute text-transparent bg-clip-text">END.</h1>
        <h1 className="row-start-1 col-start-1 animate-backgroundanimation3 bg-gradient-to-r from-pink-600 to-red-600 rounded-[5px] before:content-[''] before:absolute text-transparent bg-clip-text">DEVELOPER.</h1>
      </div>
    </section>
  )
}

export default GradientBackground