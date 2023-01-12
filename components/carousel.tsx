import { ReactNode, useEffect, useRef, useState } from "react"
import { MdOutlineNavigateNext } from 'react-icons/md'

const Carousel: React.FunctionComponent<{ children: ReactNode[] }> = ({ children }) => {
    const files = new Array(children.length)
    const slider = useRef<HTMLDivElement>(null)
    const [curr, setCurr] = useState(0)

    useEffect(() => {
        slider.current!.addEventListener("scroll", () => {
            let width = window.getComputedStyle(slider.current!).width
            width = width.substring(0, width.length - 2)
            let scrollPos = slider.current!.scrollLeft
            const widthNum = Math.floor(Number(width))
            setCurr(Math.floor(scrollPos / widthNum))
        })
    }, [])

    const scroll = (dir: string) => {
        let width = window.getComputedStyle(slider.current!).width
        width = width.substring(0, width.length - 2)
        let scrollPos = slider.current!.scrollLeft
        const widthNum = Math.floor(Number(width))
        let dist = 0
        if (dir === "right") {
            dist = scrollPos + widthNum
        } else {
            dist = scrollPos - widthNum
        }
        slider.current!.scroll({
            left: dist,
            behavior: 'smooth'
        });
        setCurr(dist / widthNum)
    }
    // useEffect(() => {
    //     currFunc(curr)
    // }, [curr, currFunc])

    return (
        <div className="w-full relative px-5">
            <div ref={slider} className="w-full flex overflow-auto slider">
                {children}
            </div>
            {curr !== 0 && <div role="button" onClick={() => scroll("left")} className="prev">
                <MdOutlineNavigateNext size={30} className="aIcon" color="white" />
            </div>
            }
            {curr < files.length - 1 &&
                <div role="button" onClick={() => scroll("right")} className="next">
                    <MdOutlineNavigateNext size={30} className="aIcon" color="white" />
                </div>
            }
        </div>
    )
}
export default Carousel