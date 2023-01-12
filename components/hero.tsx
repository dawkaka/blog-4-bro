
const Hero = () => {
  return (
    <header className="relative min-h-screen bg-[url('/assets/nana-portrait.png')] bg-fixed bg-no-repeat bg-cover">
      <div className="absolute flex w-full h-full bg-gradient-to-t">
        <div className="w-[min(100%,1200px)] flex flex-col items-center mx-[auto] text-[white]">
          <h1 className="my-[auto] max-w-[500px]  md:max-w-[700px] text-4xl sm:text-5xl md:leading-normal md:text-6xl font-bold text-[white] text-center">NPP, SALAGA SOUTH CONSTITUENCY</h1>
        </div>
      </div>
    </header>
  )
}

export default Hero
