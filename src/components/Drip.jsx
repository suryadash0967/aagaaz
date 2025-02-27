export default function Drip() {
    return (
        <>
            <div className="drip-wrapper" id="drip">
                <div className="drip-seg-wrapper" style={{}}>
                    <div className="drip-seg-head">
                        <div className="drip-seg">
                            <h1 style={{ marginBottom: "2rem", fontFamily: "Clash Display", fontWeight: 700 }}>The Style Standard</h1>
                            <div className="drip-desc">
                                <div className="dress-wrapper">
                                    <img src="/images/formals.png" alt="" />
                                    <div>Classy Formals/Semi-Formals</div>
                                </div>
                            </div>
                            <div className="drip-desc">
                                <div className="dress-wrapper">
                                    <img src="/images/saree.png" alt="" />
                                    <div>Elegant Traditionals/Ethnic (Except sarees)</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className="drip-img" src="/images/drip-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
