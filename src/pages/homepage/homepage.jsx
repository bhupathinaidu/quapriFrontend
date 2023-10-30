import React from "react";
import "./homepage.css";
import { useSelector } from "react-redux";
import { currentUser } from "../../store/test/test.reducer";
import CarouselComponent from "../../components/carousel/carousel.component";
import {
  promoCarousel,
  servicesCarousel,
  photoProductCarousel,
  newLaunchesCarousel,
  corporateGiftsCarousel,
  packagingsCarousel,
  signMarketingsCarousel,
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

const HomePage = () => {
  const user = useSelector(currentUser);

  return (
    <div className="App">
      <header className="App-header">
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
          <CarouselComponent properties={newLaunchesCarousel} />
        </div>
        <div className="corporateGiftsContainer">
          <ProductHeadingComponent heading="Corporate Gifts" />
          <CarouselComponent properties={corporateGiftsCarousel} />
        </div>
        <div className="packagingContainer">
          <ProductHeadingComponent heading="Packaging" />
          <CarouselComponent properties={packagingsCarousel} />
        </div>
        <div className="signMarketingContainer">
          <ProductHeadingComponent heading="Signs & Marketing" />
          <CarouselComponent properties={signMarketingsCarousel} />
        </div>
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
                Packages are designed to protect their products from damage
                during transportation, handling, and storage. A business depends
                heavily on the quality of its materials. Environmentally
                friendly packaging is usually preferred by customers. Today,
                innovative, reusable, and sustainable packaging are being
                created every day. Take advantage of Quapri's broad packaging
                range, and ace your business.
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
                Packages are designed to protect their products from damage
                during transportation, handling, and storage. A business depends
                heavily on the quality of its materials. Environmentally
                friendly packaging is usually preferred by customers. Today,
                innovative, reusable, and sustainable packaging are being
                created every day. Take advantage of Quapri's broad packaging
                range, and ace your business.
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
                Quapri, India's leading print-on-demand platform, aspires to
                become the global leader. With over two decades of expertise in
                the print industry and a network of delivery dark stores
                spanning six cities, we've served 50,000 businesses, from small
                startups to large enterprises, since 2015.
              </div>
              <div className="pt-3 py-3">
                Headquartered in Bangalore, India, our state-of-the-art 10,000+
                sq. ft production facility empowers us to deliver top-quality
                products. Place your orders at{" "}
                <a href="https://quapri.in/">Quapri.in</a> or get in touch with
                our dedicated teams today.
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HomePage;
