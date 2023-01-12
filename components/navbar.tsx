import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="w-[100%] mx-[auto] h-[70px] px-5 flex flex-col justify-center items-center bg-[var(--p-color)] fixed z-20 text-[white]">
      <div className="w-[min(100%,1100px)] gap-5 flex items-center justify-between">
        <div className="relative w-[80px]">
          <img src={"/assets/npp-logo2.png"} alt="npp logo" width={70} />
        </div>
        <ul className="w-[50%] h-[100%] flex justify-between gap-2 uppercase text-center">
          <li className="nav-link">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="nav-link">
            <Link href={"/delegates"}>Delegates</Link>
          </li>
          <li className="nav-link">
            <Link href={"/events"}>Events</Link>
          </li>
          <li className="nav-link">
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
