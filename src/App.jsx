import "./App.css";
import Navbar from "./components/Navbar";
import CanvaEmbed from "./components/CanvaEmbed";
import FAQs from "./components/Faqs";
import Venue from "./components/Venue";
import Menu from "./components/Menu";
import 'boxicons'
import EventsTimeline from "./components/EventsTimeline";

function App() {

	return (
		<>
			<Navbar />
			<CanvaEmbed />
      <Menu/>
      <EventsTimeline/>
			<Venue/>
			<FAQs/>
		</>
	);
}

export default App;
