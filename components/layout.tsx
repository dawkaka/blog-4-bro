import Image from "next/image"
import Link from "next/link"
import Footer from './footer'
import Intro from "./intro"
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <Intro />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
