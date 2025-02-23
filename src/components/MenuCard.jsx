import { useState } from "react";

export default function MenuCard({ name, src, bgc }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const foodNames = [];
    for(let img of src) {
        let names = img.split("-");
        let finalString = "";
        for(let str of names) {
            finalString += str.charAt(0).toUpperCase() + str.slice(1) + " ";
        }
        foodNames.push(finalString);
    }

    return (
        <div className="card-container" data-aos="fade-up">
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-face front" style={{backgroundColor: bgc}}>
                    <div>
                        <img src={`/images/${src[0]}.jpg`} alt="" className="food-img" />
                    </div>
                    <div className="nameenroll" data-aos="fade-up">
                        <div className="ename">{name}</div>
                        <box-icon name='info-circle' color='#38ccff' onClick={toggleFlip} ></box-icon>
                    </div>
                </div>
                <div className="card-face back" data-aos="fade-up" style={{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.93) 4%, ${bgc} 100%`}}>
                    <div className="overlay-content">
                        {src.map((img, index) => (
                            <div>
                                <img src={`/images/${img}.jpg`} alt="" className="back-img"/>
                                <p style={{ fontSize: '15px', padding: '20px' }}>{foodNames[index]}</p>
                            </div>
                        ))}
                        <button className="close-btn" onClick={toggleFlip}>
                            <box-icon name='x'></box-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}