import Image from "next/image";

interface Props {
    name: string;
    picture: string;
    position: string;
}

export default function Delegate({ name, picture, position }: Props) {
    return (
        <article className="shrink-0 flex items-center gap-2 rounded px-5 py-10 justify-center flex-wrap w-full slider-item">
            <div className="relative">
                <img src={picture} width={"100%"} alt={name} style={{ aspectRatio: 1 / 1, objectFit: "cover" }} />
            </div>
            <div className="text-center">
                <h3 className="text-3xl">{name}</h3>
                <p className="font-normal text-[16px] mt-2 text-[red] uppercase">{position}</p>
            </div>
        </article>
    )
}