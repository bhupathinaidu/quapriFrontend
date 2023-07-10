import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./carousel.component.css";
import testImg from "../../assets/test_img.png"

const CarouselComponent = ({ properties }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: properties.noOfSlideOnDesktop
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel responsive={responsive} containerClass={properties.classVal}>
            {properties.list.map(item => <div className='listItem' key={item.id}><img src={item.imgSrc} alt={item.id}/><p>{item.label}</p></div>)}
        </Carousel>
    )

}

export default CarouselComponent;