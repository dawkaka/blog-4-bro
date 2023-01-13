import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { IoMdClose } from 'react-icons/io'

const NavBar = () => {
  const [opened, setOpened] = useState(false)
  const router = useRouter()
  return (
    <nav className="w-[100%] mx-[auto] h-[70px] px-5 flex flex-col justify-center items-center bg-[var(--p-color)] fixed z-20 text-[white]">
      <div className="w-[min(100%,1100px)] gap-5 flex items-center justify-between">
        <div className="relative w-[50px] sm:w-[65px]">
          <img src={"/assets/npp-logo2.png"} alt="npp logo" width={"100%"} />
        </div>
        <ul className="w-[70%] md:w-[50%] h-[100%] hidden  sm:flex justify-between gap-2 uppercase text-center">
          <li className="nav-link"
            style={{
              backgroundColor: router.pathname === "/" ? "red" : ""
            }}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li className="nav-link"
            style={{
              backgroundColor: router.pathname === "/delegates" ? "red" : ""
            }}>
            <Link href={"/delegates"}>Delegates</Link>
          </li>
          <li className="nav-link"
            style={{
              backgroundColor: router.pathname === "/event" ? "red" : ""
            }}>
            <Link href={"/events"}>Events</Link>
          </li>
          <li className="nav-link" style={{
            backgroundColor: router.pathname === "/blog" ? "red" : ""
          }}>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>

        <div className="sm:hidden flex flex-col gap-2 p-2 rounded" onClick={() => setOpened(true)}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <div
          className="block sm:hidden h-screen absolute bg-[rgba(0,0,0,0.9)] top-0 right-0"
          style={{
            width: opened ? "min(100%,300px)" : "0",
            padding: opened ? "" : 0,
            transition: "width .5s linear"
          }}
        >
          <div className="flex justify-center top-10 right-10 rounded bg-[white] m-10 p-2" onClick={() => setOpened(false)}>
            <IoMdClose size={20} color={"black"} />
          </div>
          <ul className="flex flex-col gap-5 w-full relative mt-10 uppercase  m-10">
            <li className="nav-link l-sm">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="nav-link l-sm">
              <Link href={"/delegates"}>Delegates</Link>
            </li>
            <li className="nav-link l-sm">
              <Link href={"/events"}>Events</Link>
            </li>
            <li className="nav-link l-sm">
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav >
  )
}

export default NavBar
