import Link from "next/link"
import Carousel from "./carousel"
import Container from "./container"
import Delegate from "./delegate"
import { delegates } from "../lib/data"

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

export default Delegates