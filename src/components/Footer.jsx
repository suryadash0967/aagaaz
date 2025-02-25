export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-left-wrapper">
                <div className="footer-desc">
                    <b style={{color: "#000"}}>AAGAAZ 2025:</b> Where the vibe is loud, the memories are wild, and the squad is forever! 🔥🎉
                </div>
                <div className="footer-contacts">
                    <h3 style={{color: "#000"}}>Contact Us</h3>
                    <div>
                        <span style={{color: "#000"}}>Mohan Reddy(CR) : +91 7873784400</span>
                    </div>
                    <div>
                        <span style={{color: "#000"}}>Adyasha Das(GR) : +91 7205171323</span>
                    </div>
                </div>
            </div>
            <div className="footer-right-wrapper">
                <a href=""><box-icon className="abc" type='logo' name='instagram' size='md'></box-icon></a>
                <a href=""><box-icon name='youtube' type='logo' size='md' ></box-icon></a>
                <a href=""><box-icon name='linkedin' type='logo' size='md' ></box-icon></a>
            </div>

        </div>
    )
}