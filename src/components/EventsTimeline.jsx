import { useEffect, useRef } from "react";

export default function EventsTimeline() {
    const separatorRef = useRef(null);

    const handleRegistration = (link) => {
        window.open(link, "_blank");
    }

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
        <div className="events-timeline-wrapper-head" id="events">
            <div className="sacred-timeline" ref={separatorRef}></div>
            <h1 style={{marginBottom: "4rem"}}>What's Poppin'</h1>
            <div className="events-timeline-wrapper">
                <div className="indiv-event-desc">
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/sur-e-safar.jpeg" alt="" />
                    </div>
                    <div className="event-count">1</div>
                    <div className="event-main-desc" data-aos="fade-left">
                        <div>Sur-e-Safar</div>
                        <div>Seniors sing, freshers swing. A melodic welcome for our dearest juniors!</div>
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos="fade-right">
                        <div>Comedy Ke Sitare</div>
                        <div>Seniors steal the show with a skit to remember!</div>
                    </div>
                    <div className="event-count">2</div>
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/skit.jpeg" alt="" />
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/seniors-dance.jpeg" alt="" />
                    </div>
                    <div className="event-count">3</div>
                    <div className="event-main-desc" data-aos="fade-left">
                        <div>Nach De Seniors!</div>
                        <div>Move, groove and make some noise as your seniors set the dance floor on fire!</div>
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos="fade-right">
                        <div>Jalwa Juniors Ka!</div>
                        <div>Junos, it's your time to take the centre stage and shine bright. Make us proud!</div>
                    </div>
                    <div className="event-count">4</div>
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/juniors-dance.jpeg" alt="" />
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/dare.jpg" alt="" />
                    </div>
                    <div className="event-count">5</div>
                    <div className="event-main-desc" data-aos="fade-left">
                        <div>Darr Ke Aage Dare Hai!</div>
                        <div>Dare devils unleashed: Let loose and go wild with crazy dares!</div>
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos="fade-right">
                        <div>Andaz Apna Apna: Seniors vs Juniors</div>
                        <div>
                            Act. Guess. Repeat - The ultimate dumb charades face-off!
                        </div>
                    </div>
                    <div className="event-count">6</div>
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/dumb-charades.jpeg" alt="" />
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/latent.png" alt="" />
                    </div>
                    <div className="event-count">7</div>
                    <div className="event-main-desc" data-aos="fade-left">
                        <div>CsE Got Latent</div>
                        <div>Unroasted no more: Dish out all your burns and get ready to take the heat.</div>
                        <button 
                            className="event-registration-btn" 
                            onClick={() => {
                                handleRegistration("https://forms.gle/WhkUAaZbpSZe6tTUA");
                            }}
                        >Register</button>
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos="fade-right">
                        <div>Rose Tinted Rizz</div>
                        <div>Rose, rejection, or romance? The ultimate test of junior charm. May the best pick-up line win!</div>
                    </div>
                    <div className="event-count">8</div>
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/rose.jpg" alt="" />
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/surprise.jpeg" alt="" />
                    </div>
                    <div className="event-count">9</div>
                    <div className="event-main-desc" data-aos="fade-left">
                        <div>Top Secret!</div>
                        <div>All Hush Hush for this event. You get to know and see for yourself only after you come!</div>
                    </div>
                </div>
                <div className="indiv-event-desc">
                    <div className="event-main-desc" data-aos="fade-right">
                        <div>Rock n' Pose</div>
                        <div>Everyone comes together for a fun jamming session and to pose for memories that stay forever.</div>
                    </div>
                    <div className="event-count">10</div>
                    <div className="all-events-img-wrapper">
                        <img className="all-events-img" src="/images/photoshoot.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
