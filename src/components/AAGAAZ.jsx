import Navbar from "./Navbar";
import CanvaEmbed from "./CanvaEmbed";
import FAQs from "./Faqs";
import Venue from "./Venue";
import Menu from "./Menu";
import EventsTimeline from "./EventsTimeline";
import Drip from "./Drip";
import Countdown from "./Countdown";
import Footer from "./Footer";
import Memories from "./Memories";

export default function AAGAAZ() {
    return (
        <>
            <Navbar/>
			<CanvaEmbed/>
			<Countdown/>
			<Venue/>
			<EventsTimeline/>
			<Menu/>
			<Drip/>
			<Memories/>
			<FAQs/>
			<Footer/>
        </>
    )
}