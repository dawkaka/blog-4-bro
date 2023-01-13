import Container from "../components/container";
import { DelegatePage } from "../components/delegate";
import Layout from "../components/layout";



export default function DelegatesPage() {
    return (
        <Layout>
            <Container>
                <h1 className="mt-[90px] mb-[30px] text-center font-bold text-4xl">Meet The Delegates</h1>
                <section className="flex flex-col items-center justify-start">
                    {
                        delegates.map(d => {
                            return (
                                <DelegatePage {...d} key={d.position} />
                            )
                        })
                    }
                </section>
            </Container >
        </Layout >
    )
}

export const delegates = [
    {
        name: "Alhassan Abbdul Mugis",
        position: "Chairman",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Mahama John Shirazu",
        position: "first vice",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Issahahku M. Rauf",
        position: "Second vice",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Abulai Habib Abiola",
        position: "Secretary",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Abibu Mohammed",
        position: "Asst. Secretary",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Abubakari Dramani",
        position: "Organizer",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Hud Boya",
        position: "Treasurer",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Adam Mohammed Mansuru",
        position: "youth organizer",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Hajia Kulu Mawuya",
        position: "Women organizer",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Abubakari Ahmadu Tijani",
        position: "Nasara coordinator",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Abubakir Jabir",
        position: "Communications Director",
        picture: "/assets/nana-portrait.png"
    }
]