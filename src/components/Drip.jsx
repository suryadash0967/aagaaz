export default function Drip() {
    return (
        <>
            <div className="drip-wrapper">
                <div id="drip" style={{ margin: "3.5rem 0" }}></div>
                <div className="drip-seg-wrapper" style={{}}>
                    <div className="drip-seg-head">
                        <div className="drip-seg">
                            <h1 style={{ marginBottom: "2rem", fontFamily: "Clash Display", fontWeight: 500 }}>The Drip</h1>
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
                            <img className="drip-img" src="/images/drip-img.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}