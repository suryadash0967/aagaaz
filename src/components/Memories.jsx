import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from "../assets/carousel-images/images";

export default function Memories() {
    return (
        <>
            <div className="carousel-wrapper" id="memories">
                <div className="carousel-head">
                    <h1 className="carousel-head" style={{ marginBottom: "2rem", fontFamily: "Clash Display", fontWeight: 700 }}>
                        MEMORIES
                    </h1>
                </div>
                <div className="carousel-container">
                    <Carousel
                        useKeyboardArrows
                        renderArrowNext={(onClick, hasNext) =>
                            hasNext && (
                                <button className="nav_btn nav_btn_right" onClick={onClick}>
                                    < i className='bx  bx-chevron-right' style={{fontSize: "25px"}} ></i> 
                                </button>
                            )
                        }
                        renderArrowPrev={(onClick, hasPrev) =>
                            hasPrev && (
                                <button className="nav_btn nav_btn_left" onClick={onClick}>
                                    < i className='bx  bx-chevron-left' style={{fontSize: "25px"}}  ></i> 
                                </button>
                            )
                        }
                        renderIndicator={(onClick, isSelected, index) => (
                            <li
                                className={`indicator ${isSelected ? "active" : ""}`}
                                onClick={onClick}
                                key={index}
                                role="button"
                            />
                        )}
                        statusFormatter={(current, total) => (
                            <p className="status-text">Image {current} of {total}</p>
                        )}
                        transitionTime={310}
                        autoPlay
                        infiniteLoop
                        interval={3000}
                        showThumbs={true}
                        swipeable={true}
                    >
                        {images.map((src, idx) => (
                            <div className="slide" key={idx}>
                                <img src={src} alt={`Slide ${idx + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>

            </div>
        </>
    )
}