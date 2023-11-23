import Slider from 'react-slick';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carousel.scss"

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        nextArrow: <FaChevronRight/>,
        prevArrow: <FaChevronLeft/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const brandIcons = [
        'public/logos/webstorm-icon.svg',
        'public/logos/jira.svg',
        'public/logos/gitlab.svg',
        'public/logos/figma.svg',
        'public/logos/photoshop.svg',
        'public/logos/illustrator.svg',
        'public/logos/nodejs.svg',
        'public/logos/github.svg',
        'public/logos/apple.svg',
    ];

    return (
        <div className="about-wrapper">
            <h2>Applikácok, amiket rendszeresen használok</h2>
            <Slider {...settings}>
                {brandIcons.map((icon, index) => (
                    <div key={index}>
                        <img className="brand-logo" src={icon} alt={`Brand ${index + 1}`}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
