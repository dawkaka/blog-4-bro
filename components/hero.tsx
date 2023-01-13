
const Hero = () => {
  return (
    <header className="relative min-h-[calc(100vh-70px)] bg-[var(--p-color)]">
      <div className="absolute flex w-full h-full">
        <div className="w-[min(100%,1200px)] flex flex-col items-center mx-[auto]">
          <h1 className="my-[auto] px-5 sm:px-0 leading-normal text-3xl xs:text-4xl sm:text-6xl md:7xl lg:text-8xl text-white font-bold text-center">
            NPP, <span className="text-[red]">SALAGA SOUTH </span> CONSTITUENCY
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Hero
