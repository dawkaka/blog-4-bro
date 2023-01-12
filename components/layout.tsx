import Image from "next/image"
import Link from "next/link"
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen max-w-[1400px] mx-[auto]">
        <div>
          <div>
            <Image src={"/assets/npp-logo2.png"} width={70} height={70} alt="npp logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
                <Link href={"/delegates"}>Delegates</Link>
                <Link href={"/events"}>Events</Link>
                <Link href={"/blog"}>Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
