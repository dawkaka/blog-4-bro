import Container from "../components/container";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import { getAllPosts } from "../lib/api";

export default function Blog({ allPosts }) {
    return (
        <Layout>
            <Container>
                {allPosts.length > 0 && <MoreStories posts={allPosts} />}
            </Container>
        </Layout>
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
