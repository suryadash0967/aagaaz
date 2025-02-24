export default function Menu() {
    return (
        <div className="menu-wrapper-head" style={{margin: "2rem 0"}}>
            <h1 style={{ margin: "auto", zIndex: 10, fontFamily: "Clash Display", fontWeight: 500}}>
                The Menu
            </h1>
            <div className="menu-wrapper">
                <div className="menu-wrapper-for-border">
                    <div className="menu-card-wrapper">
                        <img className="menu-item-img" src="/images/blueberry-shake.jpg" alt="" />
                        <div className="menu-desc">
                            <h4 className="menu-card-head">Welcome Drinks</h4>
                            <ul>
                                <li>Blueberry Shake</li>
                                <li>Mango Shake</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menu-wrapper-for-border">
                    <div className="menu-card-wrapper">
                        <img className="menu-item-img" src="/images/american-corn.jpg" alt="" />
                        <div className="menu-desc">
                            <h4 className="menu-card-head">Starters</h4>
                            <ul>
                                <li>American Corn</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menu-wrapper-for-border">
                    <div className="menu-card-wrapper">
                        <img className="menu-item-img" src="/images/chicken-biriyani.jpg" alt="" />
                        <div className="menu-desc">
                            <h4 className="menu-card-head">Main Course</h4>
                            <ul>
                                <li>Chicken Biriyani</li>
                                <li>Raita</li>
                                <li>Papad</li>
                                <li>Salad</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menu-wrapper-for-border">
                    <div className="menu-card-wrapper">
                        <img className="menu-item-img" src="/images/choco-icecream.jpg" alt="" />
                        <div className="menu-desc">
                            <h4 className="menu-card-head">Deserts</h4>
                            <ul>
                                <li>Choco Ice-cream</li>
                                <li>Vanilla Ice-cream</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}