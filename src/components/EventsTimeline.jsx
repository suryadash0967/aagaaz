import { useEffect, useRef, useState } from "react";

export default function EventsTimeline() {
    const separatorRef = useRef(null);
    const [aosAnimation, setAosAnimation] = useState(window.innerWidth < 973 ? "fade-up" : "fade-left");

    useEffect(() => {
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

    return (
        <div className="events-timeline-wrapper-head">
            <div className="sacred-timeline" ref={separatorRef}></div>
            <div className="events-timeline-wrapper">
                <div className="indiv-event-desc">
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/party-demo.jpg" alt="" />
                    </div>
                    <div className="event-count">1</div>
                    <div className="event-main-desc" data-aos={aosAnimation}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos={aosAnimation}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="event-count">2</div>
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/party-demo.jpg" alt="" />
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/party-demo.jpg" alt="" />
                    </div>
                    <div className="event-count">3</div>
                    <div className="event-main-desc" data-aos={aosAnimation}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos={aosAnimation}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="event-count">4</div>
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/party-demo.jpg" alt="" />
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/party-demo.jpg" alt="" />
                    </div>
                    <div className="event-count">5</div>
                    <div className="event-main-desc" data-aos={aosAnimation}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos={aosAnimation}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="event-count">6</div>
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/party-demo.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
