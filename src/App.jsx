import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
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
            <div className="faq-item">
              <div className="faq-box">
                <span>Is Skills++ 2024 free?</span>
                <i className="bx bx-chevron-down"></i>
              </div>
              <div className="faq-answer">Yes, Skills++ 2024 is absolutely free for all.</div>
            </div>
            <div className="faq-item">
              <div className="faq-box">
                <span>What is the drive link that I have to submit on the registration page?</span>
                <i className="bx bx-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <div className="video-tutorial">
                  <i className="bx bx-link"></i>
                  <a style={{ color: "#fff" }} href="https://drive.google.com/file/d/1lKnc86Jh5Y5ofnNTZv6jy5OgevHdWO3k/view">
                    Video tutorial for reference
                  </a>
                </div>
                <div>
                  Create a folder in your Google Drive. In this folder, create four subfolders for each of the four weeks and
                  share the drive link with view access (do not leave it on restricted). This link will be used by your mentors
                  to check your task submissions, so don't miss it or delete it.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-box">
                <span>How can I share or download the badges or certificates?</span>
                <i className="bx bx-chevron-down"></i>
              </div>
              <div className="faq-answer">
                After successfully submitting each task every Sunday, you will receive an email with a link where you can access
                your badges or certificates. You can download or share them from there.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-box">
                <span>Where can I ask my doubts?</span>
                <i className="bx bx-chevron-down"></i>
              </div>
              <div className="faq-answer">
                After registering, you will receive an email confirming your registration, along with a link to a Discord
                server. In the server, you can go to the specific domain channel to ask your doubts.
              </div>
            </div>
            <div className="faq-item" style={{ paddingBottom: "0" }}>
              <div className="faq-box">
                <span>What will I gain from Skills++?</span>
                <i className="bx bx-chevron-down"></i>
              </div>
              <div className="faq-answer">
                You will gain hands-on knowledge with mentorship. After successfully completing each task, you will receive a
                badge, and upon completing the program, you will receive a certificate.
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
