import Container from "../components/container";
import Layout from "../components/layout";


export default function Events() {
    return (
        <Layout>
            <Container>
                <section className="min-h-screen flex items-center justify-center">
                    <h3 className="text-5xl capitalize text-center">No upcoming events</h3>
                </section>
            </Container>
        </Layout>
    )
}