export default function Venue() {
    return (
        <div className="venue-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
          backgroundColor: "#000",
          margin: "2rem 0"
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
            <h2 className="venue-head">Bilorin Cafe 'N'</h2>
            <h2 className="venue-head">Restaurant</h2>
            <p className="venue-desc" style={{marginTop: "1rem"}}>Ghatikia, Kalinganagar, Bhubaneswar,</p>
            <p className="venue-desc">Odisha, 751003</p>
          </div>
          <h3>
            <p style={{fontWeight: 400}}>Timing: 10 AM - 5 PM</p>
          </h3>
        </div>
      </div>
    )
}