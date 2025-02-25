import "./App.css";
import Navbar from "./components/Navbar";
import CanvaEmbed from "./components/CanvaEmbed";
import FAQs from "./components/Faqs";
import Venue from "./components/Venue";
import Menu from "./components/Menu";
import 'boxicons'
import EventsTimeline from "./components/EventsTimeline";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Drip from "./components/Drip";
import Countdown from "./components/Countdown";

function App() {
	AOS.init();
	return (
		<>
			<Navbar />
			<CanvaEmbed />
			<Countdown/>
			<Venue/>
			<EventsTimeline/>
			<Menu/>
			<Drip/>
			<FAQs/>
		</>
	);
}

export default App;
