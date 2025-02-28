import { useEffect } from "react";
import "../App.css";

export default function Faqs() {
    useEffect(() => {
        const faqItems = document.querySelectorAll(".faq-item");
      
        const toggleFaq = (event) => {
          const faqItem = event.currentTarget.parentElement;
          const icon = faqItem.querySelector("box-icon");
          const answer = faqItem.querySelector(".faq-answer");
      
          faqItems.forEach((item) => {
            if (item !== faqItem) {
              item.classList.remove("active");
              item.querySelector(".faq-answer").style.display = "none";
              item.querySelector("box-icon").classList.remove("active");
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
      <div id="faqs">
      <div className="faqs-head" style={{ fontFamily: "Clash Display", color: "#fff", fontWeight: 600 }}>
        FAQs
      </div>

      <div className="faq-container">
        {/* Event Basics */}
        <div className="faq-category">
          
            <h3 style={{ color: "#fff", marginBottom: "1rem" }}><span className="faq-heads"></span>🎉 Event Basics</h3>

          <div className="faq-item">
            <div className="faq-box">
              <span>What is AAGAAZ?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">It's the official welcome party where freshers go from "Who are these people?" to "Bro, we're in this together!"</div>
          </div>

          <div className="faq-item">
            <div className="faq-box">
              <span>When & where is it happening?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">
              📅 1st March, 10 AM - 5 PM
              <br />
              📍 Bilorin Café 'N' Restaurant - Because college corridors are too mainstream.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-box">
              <span>Who can attend?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">Only CSE & CE students. If you're from another branch… err, wrong turn buddy!</div>
          </div>

          <div className="faq-item">
            <div className="faq-box">
              <span>What should I wear?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">
              Boys: Formals / Semi-formals - Basically, look like you're either going for a job interview or a fancy date. No, hoodies don't count. 😎
              <br />
              Girls: Ethnic wear (excluding sarees) - Because we want you to slay, not struggle with pleats all day! 💃✨

            </div>
          </div>
        </div>

        {/* Entry & Registration */}
        <div className="faq-category">
          
            <h3 style={{ color: "#fff", marginBottom: "1rem" }}><span className="faq-heads"></span>🎫 Entry & Registration</h3>

          <div className="faq-item">
            <div className="faq-box">
              <span>Is there an entry fee?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">
              Yes, ₹250 for juniors—consider it an investment in an epic experience! Since this is the first-ever fresher's party in our department, we're making history (and covering costs). Next
              year, your juniors can thank you for making this happen! 😎🔥
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-box">
              <span>Do I need to register?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">Yes! We need to know how many party animals we're dealing with.</div>
          </div>

          <div className="faq-item">
            <div className="faq-box">
              <span>Can I bring a friend from another department?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">Unless they're an undercover CSE/CE student, nope.</div>
          </div>
        </div>

        {/* Performances & Activities */}
        <div className="faq-category">
          
            <h3 style={{ color: "#fff", marginBottom: "1rem" }}><span className="faq-heads"></span>🎭 Performances & Activities</h3>

          <div className="faq-item">
            <div className="faq-box">
              <span>Will there be games and contests?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">Yes! And no, "Netflix bingeing" is not one of them.</div>
          </div>

          <div className="faq-item">
            <div className="faq-box">
              <span>Can I perform at the event?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">Of course! Sing, dance, joke, or even do a dramatic reading of your syllabus—if you can entertain, you're in!</div>
          </div>

          <div className="faq-item">
            <div className="faq-box">
              <span>How are winners decided?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">By a panel of "very serious" judges and the loudest cheers. So, bring your fan club!</div>
          </div>
        </div>

        {/* Food & Refreshments */}
        <div className="faq-category">
          
            <h3 style={{ color: "#fff", marginBottom: "1rem" }}><span className="faq-heads"></span>🍕 Food & Refreshments</h3>

          <div className="faq-item">
            <div className="faq-box">
              <span>Will there be food?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">Do freshers have assignments? Yes. So, of course!</div>
          </div>

          <div className="faq-item">
            <div className="faq-box">
              <span>What if I have dietary restrictions?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">Let us know in advance. We promise not to serve you mystery meat.</div>
          </div>
        </div>
        
        {/* Prizes & Fun Stuff */}
        <div className="faq-category">
          
            <h3 style={{ color: "#fff", marginBottom: "1rem" }}><span className="faq-heads"></span>🏆 Prizes & Fun Stuff</h3>

          <div className="faq-item">
            <div className="faq-box">
              <span>Will there be prizes?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">Who knows? Maybe, maybe not. Guess you’ll have to show up and find out! 🎁😉</div>
          </div>

          <div className="faq-item">
            <div className="faq-box">
              <span>Are there any contests?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">Oh, absolutely! But you'll need to register and let us know in the form. No spoilers—just bring your A-game! 🎭🔥</div>
          </div>
          
          <div className="faq-item">
            <div className="faq-box">
              <span>Will there be photos from the event?</span>
              <box-icon name='chevron-down' color='#fecc2e' ></box-icon>
            </div>
            <div className="faq-answer">Oh, absolutely. You might even become a meme.</div>
          </div>
        </div>
      </div>
    </div>
    )
}