export default function Drip() {
    return (
        <>
            <div className="drip-wrapper">
                
                <div style={{display: "flex", gap: "8rem", alignItems: "center"}}>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", gap: "0.5rem"}}>
                        <h1 style={{marginBottom: "2rem", fontFamily: "Clash Display", fontWeight: 500}}>The Drip</h1>
                        <div className="drip-desc">
                            <div className="dress-wrapper">
                                <img src="/images/formals.png" alt="" />
                                <div>Formal shirt and pant</div>
                            </div>
                        </div>
                        <div className="drip-desc">
                            <div className="dress-wrapper">
                                <img src="/images/saree.png" alt="" />
                                <div>Traditional Saree</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="drip-img" src="/images/drip-img.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}