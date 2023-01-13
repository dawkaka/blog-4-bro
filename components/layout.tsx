import Image from "next/image"
import Link from "next/link"
import Footer from './footer'
import Meta from './meta'
import NavBar from "./navbar"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <NavBar />
        <main className="mt-[70px]">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
