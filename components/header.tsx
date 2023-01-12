import Link from 'next/link'

const Header = () => {
  return (
    <header className="relative mt-[-35px] min-h-[90vh] bg-[url('/assets/nana-portrait.png')] bg-no-repeat bg-cover">
      <div className="absolute flex w-full h-full bg-gradient-to-t">
        <div className="w-[min(100%,1200px)] flex flex-col items-center mx-[auto] text-[white]">
          <h1 className="my-[auto] text-4xl md:leading-normal md:text-7xl font-bold text-[white] text-center">NPP, SALAGA SOUTH CONSTITUENCY</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
