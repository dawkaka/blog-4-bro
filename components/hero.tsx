
const Hero = () => {
  return (
    <header className="relative min-h-[calc(100vh-70px)] bg-[var(--p-color)]">
      <div className="absolute flex w-full h-full">
        <div className="w-[min(100%,1200px)] flex flex-col items-center mx-[auto]">
          <h1 className="relative my-[auto] px-5 sm:px-3 leading-normal text-3xl xs:text-4xl sm:text-6xl md:text-7xl text-white font-bold text-center">
            <span className="slide-l">NPP,</span> <span className="text-[red] drop">SALAGA SOUTH </span> <span className="slide">CONSTITUENCY.</span>
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Hero
