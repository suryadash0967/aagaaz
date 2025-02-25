import { useEffect, useRef, useState } from "react";
import AOS from "aos"; // Ensure AOS is imported
import "aos/dist/aos.css"; // Import AOS CSS

export default function EventsTimeline() {
    const separatorRef = useRef(null);
    const [aosAnimation, setAosAnimation] = useState(window.innerWidth < 973 ? "fade-up" : "fade-left");
    const [fadeLeft, setFadeLeft] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration

        const updateSeparatorHeight = () => {
            const lastEvent = document.querySelector(".indiv-event-desc:last-child");
            if (lastEvent && separatorRef.current) {
                const separatorHeight = lastEvent.offsetTop - document.querySelector(".indiv-event-desc:first-child").offsetTop;
                separatorRef.current.style.height = `${separatorHeight}px`;
            }
        };

        const updateAosAnimation = () => {
            setAosAnimation(window.innerWidth < 973 ? "fade-up" : "fade-left");
        };

        updateSeparatorHeight();
        updateAosAnimation();
        window.addEventListener("resize", updateSeparatorHeight);
        window.addEventListener("resize", updateAosAnimation);

        return () => {
            window.removeEventListener("resize", updateSeparatorHeight);
            window.removeEventListener("resize", updateAosAnimation);
        };
    }, []);

    // Precompute alternating animations without triggering re-renders
    const computedAnimations = Array(6).fill(null).map((_, index) => index % 2 === 0 ? "fade-left" : "fade-right");

    return (
        <div className="events-timeline-wrapper-head" id="events">
            <div className="sacred-timeline" ref={separatorRef}></div>
            <div className="events-timeline-wrapper">
                {[...Array(6)].map((_, index) => (
                    <div className="indiv-event-desc" key={index}>
                        {index % 2 === 0 ? (
                            <>
                                <div className="all-events-img-wrapper">
                                    <img className="all-events-img" src="/images/party-demo.jpg" alt="" />
                                </div>
                                <div className="event-count">{index + 1}</div>
                                <div className="event-main-desc" data-aos={computedAnimations[index]}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="event-main-desc" data-aos={computedAnimations[index]}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <div className="event-count">{index + 1}</div>
                                <div className="all-events-img-wrapper">
                                    <img className="all-events-img" src="/images/party-demo.jpg" alt="" />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
