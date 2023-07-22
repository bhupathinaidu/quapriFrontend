import React from "react";
import "./homepage.css";
import { useSelector } from "react-redux";
import { currentUser } from "../../store/test/test.reducer";
import NavbarComponent from "../../components/navbar/navbar.component";
import HeaderComponent from "../../components/header/header.component";
import ServiceNavbarComponent from "../../components/servicesNav/servicesNav.component";
import CarouselComponent from "../../components/carousel/carousel.component";
import {
  promoCarousel,
  servicesCarousel,
  photoProductCarousel,
} from "../../commom/carousel.constants";
import ProductHeadingComponent from "../../components/productHeading/product.heading.component";
import { productList } from "../../commom/product.constants";
import ProductCardComponent from "../../components/productCard/product.card.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import packageImg from "../../assets/packaging-img.PNG";
import singageImg from "../../assets/singage.PNG";
import returnImg from "../../assets/return.PNG";
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
  const user = useSelector(currentUser);

  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
        <HeaderComponent />
        <ServiceNavbarComponent />
        <CarouselComponent properties={promoCarousel} />
        <CarouselComponent properties={servicesCarousel} />
        <div className="popularProductsConatiner">
          <ProductHeadingComponent heading="Popular Products" />
          <div className="popularProducts">
            {productList.map((item) => (
              <ProductCardComponent item={item} key={item.label} />
            ))}
          </div>
        </div>
        <div className="photoProductContainer">
          <ProductHeadingComponent heading="Photo Products" />
          <CarouselComponent properties={photoProductCarousel} />
        </div>
        <div className="newLaunchesContainer">
          <ProductHeadingComponent heading="New Launches" />
          <CarouselComponent properties={photoProductCarousel} />
        </div>
        <div className="corporateGiftsContainer">
          <ProductHeadingComponent heading="Corporate Gifts" />
          <CarouselComponent properties={photoProductCarousel} />
        </div>
        <div className="stationeryContainer">
          <ProductHeadingComponent heading="Stationery" />
          <CarouselComponent properties={photoProductCarousel} />
        </div>
        <div className="packagingContainer">
          <ProductHeadingComponent heading="Packaging" />
          <CarouselComponent properties={photoProductCarousel} />
        </div>
        <div className="signMarketingContainer">
          <ProductHeadingComponent heading="Signs & Marketing" />
          <CarouselComponent properties={photoProductCarousel} />
        </div>
      </header>
      <Container className="mt-4">
        <Row className="align-items-center">
          <Col md={5} className="px-0 px-md-3">
            <div className="packageImg">
              <img src={packageImg} alt="" />
            </div>
          </Col>
          <Col md={7} className="pt-4 pt-md-0">
            <h2>Packaging Materials</h2>
            <h5>Branding | Product Packaging</h5>
            <div>
              Packages are designed to protect their products from damage during
              transportation, handling, and storage. A business depends heavily
              on the quality of its materials. Environmentally friendly
              packaging is usually preferred by customers. Today, innovative,
              reusable, and sustainable packaging are being created every day.
              Take advantage of Printo's broad packaging range, and ace your
              business.
            </div>
            <button className="btn btn-primary mt-3">Read More</button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row className="align-items-center">
          <Col md={7} className="pt-4 pt-md-0">
            <h2>Packaging Materials</h2>
            <h5>Branding | Product Packaging</h5>
            <div>
              Packages are designed to protect their products from damage during
              transportation, handling, and storage. A business depends heavily
              on the quality of its materials. Environmentally friendly
              packaging is usually preferred by customers. Today, innovative,
              reusable, and sustainable packaging are being created every day.
              Take advantage of Printo's broad packaging range, and ace your
              business.
            </div>
            <button className="btn btn-primary mt-3">Read More</button>
          </Col>
          <Col md={5} className="px-0 px-md-3">
            <div className="packageImg">
              <img src={singageImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col md={12}>
            <img src={returnImg} alt="" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col md={12}>
            <h2>About Quapri</h2>
            <h5>Print and Gifting made easy!</h5>
            <div className="pt-3">
              We are India's largest print-on-demand platform with a vision to
              be the world's largest. We have over 15 years of experience in the
              print industry, 28 retail stores across 6 cities, and have
              serviced more than 1 Million customers online & offline.
            </div>
            <div className="pt-3">
              From Business Cards to Signage to Employee Joining Kits -- since
              2006, Printo has helped 10 lakh+ small, medium & some of India's
              largest businesses like Google, Accenture & PhonePe.
            </div>
            <div className="pt-3 py-3">
              Printo is headquartered in Bangalore, India, with a 50,000+ sq. ft
              production facility. From the first store in Koramangala,
              Bangalore, Printo has launched 28 retail stores across 6-cities.
              Order from Printo.in or in-store or talk to our teams today.
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
