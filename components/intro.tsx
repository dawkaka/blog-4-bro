import Image from "next/image"
import Link from "next/link"
import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <div className="max-w-[1400px] mx-[auto] flex flex-col items-center">
      <div className="w-[min(100vw,1000px)] p-5">
        <Image src={"/assets/npp-logo2.png"} width={70} height={70} alt="npp logo" />
      </div>
      <nav className="flex justify-center px-5 w-[min(100vw,1300px)] bg-[var(--p-color)] text-[white] h-[70px] items-center rounded z-10">
        <ul className="w-[min(100%,800px)] flex justify-between gap-5 text-[18px]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/delegates"}>Delegates</Link>
          </li>
          <li>
            <Link href={"/events"}>Events</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Intro
