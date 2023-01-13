import { ReactNode, useEffect, useRef, useState } from "react"
import { MdOutlineNavigateNext } from 'react-icons/md'
import { clearInterval } from "timers"

const Carousel: React.FunctionComponent<{ children: ReactNode[] }> = ({ children }) => {
    const files = new Array(children.length)
    const slider = useRef<HTMLDivElement>(null)
    const [curr, setCurr] = useState(0)
    const direc = useRef<"left" | "right">("right")
    const timer = useRef<NodeJS.Timer>(null)

    useEffect(() => {
        slider.current.addEventListener("scroll", () => {
            let width = window.getComputedStyle(slider.current!).width
            width = width.substring(0, width.length - 2)
            let scrollPos = slider.current!.scrollLeft
            const widthNum = Math.floor(Number(width))
            setCurr(Math.floor(scrollPos / widthNum))
        })
    }, [])

    const scroll = (dir: string) => {
        if (!slider.current) return
        let width = window.getComputedStyle(slider.current).width
        width = width.substring(0, width.length - 2)
        let scrollPos = slider.current.scrollLeft
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
    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (slider.current) {
                        timer.current = setInterval(() => {
                            scroll(direc.current)

                        }, 3000)
                    }
                }
            },
            { threshold: 0.5 }
        );

        if (slider.current) {
            observer.observe(slider.current);
            if (timer.current) {
                clearInterval(timer.current)
            }
        }

        return () => {
            observer.disconnect()
        }

    }, [])

    if (curr === files.length) {
        direc.current = "left"
    } else if (curr < 0) {
        direc.current = "right"
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