import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Hero from "../components/hero"
import Delegates from "../components/delegates-home"
import { GiCutDiamond } from "react-icons/gi"
import { FaHandshake, FaMoneyBill } from 'react-icons/fa'
type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>NPP Salaga South Constituency</title>
        </Head>
        <Hero />
        <Goals />
        <Delegates />
        <Container>
          {allPosts.length > 0 && <MoreStories posts={allPosts} home />}
        </Container>
        <MediaUpdate />
      </Layout>
    </>
  )
}


const Goals = () => {
  const iconSize = 40
  return (
    <section className="py-[80px] sm:py-[100px]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="flex flex-col gap-2 items-center py-10 px-5 sm:px-10 text-center bg-[red] text-white">
            <GiCutDiamond size={iconSize} />
            <h4 className="text-2xl sm:text-3xl font-bold">Stable Democracy</h4>
            <p>
              A stable, peaceful, united and democratic nation dedicated to the promotion of the welfare, freedom and prosperity of its citizens
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center py-10 px-5 sm:px-10 text-center">
            <FaHandshake size={iconSize} />
            <h4 className="text-2xl sm:text-3xl font-bold">Good Governance</h4>
            <p>
              A country whose governance is imbued with the principles of liberal democracy, the rule of law, respect for human rights and social justice.            </p>
          </div>
          <div className="flex flex-col gap-2 items-center py-10 px-5 sm:px-10 text-center bg-[var(--p-color)] text-white">
            <FaMoneyBill size={iconSize} />
            <h4 className="text-2xl sm:text-3xl font-bold">Prosperity</h4>
            <p>
              that the key to creating prosperity for all is to unleash the energies of the private sector through the development of an entrepreneurial free enterprise economy            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

const MediaUpdate = () => {
  return (
    <section className="mb-20">
      <Container>
        <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
          Media Update
        </h2>
        <div className="grid gap-2 grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-10">
          <img src="/assets/nana-portrait.png" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} alt="" />
          <img src="/assets/nana-portrait.png" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} alt="" />
          <img src="/assets/nana-portrait.png" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} alt="" />
          <img src="/assets/nana-portrait.png" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} alt="" />
          <img src="/assets/nana-portrait.png" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} alt="" />
          <img src="/assets/nana-portrait.png" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }} alt="" />
        </div>
      </Container>
    </section>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
