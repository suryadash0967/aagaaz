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

function App() {
	AOS.init();
	return (
		<>
			<Navbar />
			<CanvaEmbed />
			{/* <Menu/> */}
			<Venue/>
			<EventsTimeline/>
			<FAQs/>
		</>
	);
}

export default App;
