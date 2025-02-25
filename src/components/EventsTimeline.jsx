import { useEffect, useRef } from "react";

export default function EventsTimeline() {
    const separatorRef = useRef(null);

    useEffect(() => {
        const updateSeparatorHeight = () => {
            const lastEvent = document.querySelector(".indiv-event-desc:last-child");
            const image = document.querySelector(".all-events-img");
            if (lastEvent && separatorRef.current) {
                const separatorHeight = lastEvent.offsetTop - document.querySelector(".indiv-event-desc:first-child").offsetTop;
                separatorRef.current.style.height = `${separatorHeight}px`;
            }
        };

        updateSeparatorHeight();
        window.addEventListener("resize", updateSeparatorHeight);

        return () => {
            window.removeEventListener("resize", updateSeparatorHeight);
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
                    <div className="event-main-desc" data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
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
                    <div className="event-main-desc" data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
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
                    <div className="event-main-desc" data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="event-count">6</div>
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/party-demo.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}