import { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [

    {
        id: 1,
        image: "./education.webp",
        name: "M3M Alltitude",
        address: "Sector 65, Gurgaon",
        cost: "On Request"
    },
    {
        id: 1,
        image: "./taken.webp",
        name: "Whiteland Urban Resort",
        address: "Sector 100, Gurgaon",
        cost: "On Request"
    },
    {
        id: 1,
        image: "./astronaut.webp",
        name: "M3M Mansion",
        address: "Sector 113, Gurgaon",
        cost: "On Request"
    },
    {
        id: 1,
        image: "./celebrating.webp",
        name: "DLF The Arbour",
        address: "Sector 113, Gurgaon",
        cost: "On Request"
    }

];

const Carousal = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <IoIosArrowForward />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <IoIosArrowBack />
            </div>
        );
    };


    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <>
            <div className="App">
                <Slider {...settings}>
                    {images.map((e, id) => (
                        <div key={id} className={id === imageIndex ? "slide activeSlide" : "slide"}>
                            <div className="imgage">
                                <img src={e.image} alt={`slide-${id}`} />
                            </div>
                            <div className="text">
                                <h3>{e.name}</h3>
                                <p>{e.address}</p>
                                <p>{e.cost}</p>
                                <button >View More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Carousal;
