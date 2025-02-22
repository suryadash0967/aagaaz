import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CanvaEmbed from "./components/CanvaEmbed";

function App() {
	useEffect(() => {
		const faqItems = document.querySelectorAll(".faq-item");

		const toggleFaq = (event) => {
			const faqItem = event.currentTarget.parentElement;
			const icon = faqItem.querySelector("i");
			const answer = faqItem.querySelector(".faq-answer");

			faqItems.forEach((item) => {
				if (item !== faqItem) {
					item.classList.remove("active");
					item.querySelector(".faq-answer").style.display = "none";
					item.querySelector("i").classList.remove("active");
				}
			});

			faqItem.classList.toggle("active");
			icon.classList.toggle("active");

			if (faqItem.classList.contains("active")) {
				answer.style.display = "block";
			} else {
				answer.style.display = "none";
			}
		};

		faqItems.forEach((faqItem) => {
			const faqBox = faqItem.querySelector(".faq-box");
			faqBox.addEventListener("click", toggleFaq);
		});

		return () => {
			faqItems.forEach((faqItem) => {
				const faqBox = faqItem.querySelector(".faq-box");
				faqBox.removeEventListener("click", toggleFaq);
			});
		};
	}, []);

	return (
		<>
			<Navbar />
			<CanvaEmbed />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "2rem",
					position: "relative",
					top: "-80px",
					backgroundColor: "#000",
				}}
			>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.4506082492035!2d85.7641668!3d20.2816074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907e5d1174bef%3A0x6170491d122e08d1!2sBilorin%20Cafe%20&#39;N&#39;%20Restaurant!5e0!3m2!1sen!2sin!4v1740235861232!5m2!1sen!2sin"
					width="600"
					height="450"
					style={{ border: 0, borderRadius: "20px", marginLeft: "1rem", minWidth: "600px" }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>

				<div style={{ color: "#fff", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
					<div>
						<h2 style={{ fontFamily: "Tan Nimbus", letterSpacing: "2px" }}>Bilorin Cafe 'N' Restaurant</h2>
						<p style={{ fontSize: "18px" }}>Ghatikia, Kalinganagar, Bhubaneswar, Odisha, 751003</p>
					</div>
					<h3>
						<strong>Timing:</strong> 10 AM - 5 PM
					</h3>
				</div>
			</div>
			<div id="faqs-wrapper">
				<div className="faqs-head" style={{ fontFamily: "Tan Nimbus", color: "#fff" }}>
					FAQs
				</div>

				<div className="faq-container">
					{/* Event Basics */}
					<div className="faq-category">
						<h3 style={{ color: "#fff", marginBottom: "1rem" }}>Event Basics</h3>

						<div className="faq-item">
							<div className="faq-box">
								<span>What is AAGAAZ?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">It's the official welcome party where freshers go from "Who are these people?" to "Bro, we're in this together!"</div>
						</div>

						<div className="faq-item">
							<div className="faq-box">
								<span>When & where is it happening?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">
								📅 1st March, 10 AM - 4 PM
								<br />
								📍 Bilorin Café 'N' Restaurant - Because college corridors are too mainstream.
							</div>
						</div>

						<div className="faq-item">
							<div className="faq-box">
								<span>Who can attend?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">Only CSE & CE students. If you're from another branch… err, wrong turn buddy!</div>
						</div>

						<div className="faq-item">
							<div className="faq-box">
								<span>What should I wear?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">Something that screams "I'm cool" but also "I didn't try too hard."</div>
						</div>
					</div>

					{/* Entry & Registration */}
					<div className="faq-category">
						<h3 style={{ color: "#fff", marginBottom: "1rem" }}>Entry & Registration</h3>

						<div className="faq-item">
							<div className="faq-box">
								<span>Is there an entry fee?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">
								Yes, ₹250 for juniors—consider it an investment in an epic experience! Since this is the first-ever fresher's party in our department, we're making history (and covering costs). Next
								year, your juniors can thank you for making this happen! 😎🔥
							</div>
						</div>

						<div className="faq-item">
							<div className="faq-box">
								<span>Do I need to register?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">Yes! We need to know how many party animals we're dealing with.</div>
						</div>

						<div className="faq-item">
							<div className="faq-box">
								<span>Can I bring a friend from another department?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">Unless they're an undercover CSE/CE student, nope.</div>
						</div>
					</div>

					{/* Performances & Activities */}
					<div className="faq-category">
						<h3 style={{ color: "#fff", marginBottom: "1rem" }}>Performances & Activities</h3>

						<div className="faq-item">
							<div className="faq-box">
								<span>Will there be games and contests?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">Yes! And no, "Netflix bingeing" is not one of them.</div>
						</div>

						<div className="faq-item">
							<div className="faq-box">
								<span>Can I perform at the event?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">Of course! Sing, dance, joke, or even do a dramatic reading of your syllabus—if you can entertain, you're in!</div>
						</div>

						<div className="faq-item">
							<div className="faq-box">
								<span>How are winners decided?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">By a panel of "very serious" judges and the loudest cheers. So, bring your fan club!</div>
						</div>
					</div>

					{/* Food & Refreshments */}
					<div className="faq-category">
						<h3 style={{ color: "#fff", marginBottom: "1rem" }}>Food & Refreshments</h3>

						<div className="faq-item">
							<div className="faq-box">
								<span>Will there be food?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">Do freshers have assignments? Yes. So, of course!</div>
						</div>

						<div className="faq-item">
							<div className="faq-box">
								<span>What if I have dietary restrictions?</span>
								<i className="bx bx-chevron-down"></i>
							</div>
							<div className="faq-answer">Let us know in advance. We promise not to serve you mystery meat.</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
