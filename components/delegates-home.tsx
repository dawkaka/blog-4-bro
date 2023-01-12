import Link from "next/link"
import Carousel from "./carousel"
import Container from "./container"
import Delegate from "./delegate"

function Delegates() {

    return (
        <section className="bg-[var(--p-color)] text-[white] text-center py-[80px]  md:py-[100px] px-5 font-bold">
            <Container>
                <h2 className="mb-5 text-2xl md:text-4xl">THE DELEGATES</h2>
            </Container>

            <div className="w-[min(100%,500px)] mx-auto">
                <Carousel>
                    {
                        delegates.map(d => {
                            return (
                                <Delegate {...d} key={d.position} />
                            )
                        })
                    }

                </Carousel>
            </div>
            <Container>
                <Link href={"/delegates"} className="bg-[red] px-5 py-3 rounded">See all delegates</Link>
            </Container>
        </section>
    )
}

const delegates = [
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
        name: "Abubakari Dramani",
        position: "Organizer",
        picture: "/assets/nana-portrait.png"
    },
    {
        name: "Abubakir Jabir",
        position: "Communications Director",
        picture: "/assets/nana-portrait.png"
    }
]
export default Delegates