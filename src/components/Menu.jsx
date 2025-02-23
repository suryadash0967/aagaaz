import { useState } from "react";
import MenuCard from "./MenuCard";

export default function Menu() {



    return (
        <div className="menu-wrapper-head" style={{margin: "2rem 0"}}>
            {/* <img src="../../public/images/menu-bg.png" alt="" className="menu-bg" /> */}
            <h2 style={{ margin: "auto", textAlign: "center", fontFamily: "Tan Nimbus", position: "relative", top: "-80px", color: '#fff', zIndex: 10, }}>
                FEAST MODE: ACTIVATED!
            </h2>
            <div className="menu-wrapper">
                <MenuCard name={"Welcome Drinks"} src={["mango-shake", "blueberry-shake"]} bgc={"#FF9800"} textColor={"#fff"} />
                <MenuCard name={"Starters"} src={["american-corn"]} bgc={""} textColor={"#000"}/>
                <MenuCard name={"Main Course"} src={["chicken-biriyani", "raita"]} bgc={"#8B4513"} textColor={"#fff"}/>
                <MenuCard name={"Side Dishes"} src={["papad", "salad"]} bgc={""} textColor={"#000"}/>
                <MenuCard name={"Deserts"} src={["vanilla-icecream", "choco-icecream"]} bgc={""} textColor={"#000"}/>
            </div>
        </div>
    )
}