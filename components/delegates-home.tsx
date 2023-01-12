import Carousel from "./carousel"
import Container from "./container"
import Delegate from "./delegate"

function Delegates() {

    return (
        <section className="bg-[var(--p-color)] text-[white] text-center py-[80px]  md:py-[150px] px-5 text-5xl font-bold">
            <Container>
                <h2 className="mb-10">OUR DELEGATES</h2>
            </Container>

            <div className="w-[min(100%,500px)] mx-auto">
                <Carousel>
                    <Delegate name="Abubakari Jabiru" picture="/assets/nana-portrait.png" position="Communtication director" />
                    <Delegate name="Abubakari Jabiru" picture="/assets/nana-portrait.png" position="Communtication director" />
                    <Delegate name="Abubakari Jabiru" picture="/assets/nana-portrait.png" position="Communtication director" />
                    <Delegate name="Abubakari Jabiru" picture="/assets/nana-portrait.png" position="Communtication director" />
                </Carousel>
            </div>
        </section>
    )
}

export default Delegates