import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.component.css";
import { Link } from "react-router-dom";

const CarouselComponent = ({ properties, isAutoPlay }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: properties.noOfSlideOnDesktop,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      partialVisibilityGutter: 10,
    },
  };
  
  return (
    <Carousel responsive={responsive} autoPlay={isAutoPlay} infinite={isAutoPlay} containerClass={properties.classVal}>
      {properties.list.map((item) => (
        <Link to={item.src} key={item.id}>
          <div className="listItem">
            <img src={item.imgSrc} alt={item.label} />
            <p>{item.label}</p>
          </div>
        </Link>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
