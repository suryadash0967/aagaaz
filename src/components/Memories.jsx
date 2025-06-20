import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sprite from "../assets/sprite.svg";
import images from "../assets/carousel-images/images";

const rotateAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const timing = "ease-in-out";
  const baseStyle = {
    display: "block",
    minHeight: "100%",
    transitionTimingFunction: timing,
    transitionDuration: transitionTime,
    position: "absolute",
    inset: "0",
    opacity: 0,
    filter: "blur(5px)",
  };
  return {
    slideStyle: baseStyle,
    selectedStyle: { ...baseStyle, opacity: 1, position: "relative", zIndex: 2, filter: "blur(0)" },
    prevStyle: {
      ...baseStyle,
      transform: `rotate(${state.previousItem > state.selectedItem ? "-30deg" : "30deg"})`,
    },
  };
};

export default function Memories() {
    return (
        <>
            <div className="carousel-wrapper">
                <div className="carousel-head">
                    <h1 className="carousel-head" style={{ marginBottom: "2rem", fontFamily: "Clash Display", fontWeight: 700 }}>
                        MEMORIES
                    </h1>
                </div>
                <div className="carousel-container">
                    <Carousel
                        useKeyboardArrows
                        // showIndicators
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
                        // animationHandler={rotateAnimationHandler}
                        autoPlay
                        infiniteLoop
                        interval={3000}
                        // stopOnHover
                        // showIndicators
                        showThumbs={true}
                        // useKeyboardArrows
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