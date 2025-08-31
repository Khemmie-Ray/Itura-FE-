import { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";

const ScrollButton = () => {
    const bgClass = "bg-white/10"

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed bottom-8 right-8 z-20">
            {
                isVisible && (<button onClick={scrollToTop} className={`px-3.5 py-3.5 bg-primary duration-200 transition-all hover:bg-lilac text-white md:text-2xl text-base rounded-[3px] border border-white/20 ${bgClass}`}>
                    <MdDoubleArrow className="-rotate-90 animate-pulse" />
                </button>)
            }
        </div>


    )
}

export default ScrollButton