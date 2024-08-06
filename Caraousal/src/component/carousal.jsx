import { useState } from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const images = [
    {
        id: 1,
        image: "./education.webp",
        name: "M3M Alltitude",
        address: "Sector 65, Gurgaon",
        cost: "On Request",
    },
    {
        id: 1,
        image: "./taken.webp",
        name: "Whiteland Urban Resort",
        address: "Sector 100, Gurgaon",
        cost: "On Request",
    },
    {
        id: 1,
        image: "./astronaut.webp",
        name: "M3M Mansion",
        address: "Sector 113, Gurgaon",
        cost: "On Request",
    },
    {
        id: 1,
        image: "./celebrating.webp",
        name: "DLF The Arbour",
        address: "Sector 113, Gurgaon",
        cost: "On Request",
    },
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
        speed: 800,
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
                <h1 className="project">Projects</h1>
                <Slider {...settings}>
                    {images.map((e, id) => (
                        <div
                            key={id}
                            className={id === imageIndex ? "slide activeSlide" : "slide"}
                        >
                            <div className="cart-image">
                                <img src={e.image} alt={`slide-${id}`} />
                            </div>
                            <div className="details-div">
                                <h3>{e.name}</h3>
                                <p>
                                    <span>
                                        {" "}
                                        <FaMapMarkerAlt />
                                    </span>{" "}
                                    {e.address}
                                </p>
                                <p><span> <MdOutlineCurrencyRupee /></span>    {e.cost}</p>
                                <button className="viewmore">View More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Carousal;
