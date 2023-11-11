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
import packageImg from "../../assets/packaging-img.jpg";
import singageImg from "../../assets/singage.jpg";
import returnImg from "../../assets/easy_return.jpg";

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
                The main purpose of packaging is to keep products safe when
                they're being moved, touched, or stored. A business's success
                relies significantly on the quality of the materials used for
                packaging. Many customers these days like packaging that is good
                for the environment. There's a constant stream of new and
                creative packaging options that are eco-friendly, can be used
                again, and are sustainable.
              </div>
              <div>
                In this evolving landscape, you can make the most of the wide
                range of packaging choices offered by Quapri to give your
                business a significant advantage. Good packaging doesn't just
                protect your products during transportation, handling, and
                storage; it also helps maintain their quality. When you opt for
                environmentally friendly and sustainable packaging, you not only
                cater to the preferences of eco-conscious consumers but also
                promote responsible business practices that benefit the planet.
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
                In light of these trends, you can leverage the extensive array
                of packaging choices offered by Quapri to elevate your business
                to new heights. Whether it's safeguarding your products during
                transportation, ensuring they remain in top condition during
                handling, or preserving their quality while in storage, the
                right packaging is instrumental in achieving these goals.
                Moreover, by embracing eco-conscious and sustainable packaging
                solutions, you not only cater to the preferences of
                environmentally aware consumers but also contribute to a greener
                and more responsible approach to business practices. With
                Quapri's diverse packaging offerings, you can position your
                business for success by making the right packaging choices.
              </div>
              <button className="btn btn-primary mt-3 my-3">Read More</button>
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
                Quapri, the foremost print-on-demand platform in India, has set
                its sights on achieving global leadership. Drawing upon more
                than 20 years of valuable experience in the print industry,
                coupled with an extensive network of delivery dark stores across
                six cities, Quapri has been catering to a diverse clientele of
                50,000 businesses since its establishment in 2015. These
                businesses span the spectrum from small startups to large
                enterprises.
              </div>
              <div className="pt-3">
                With its rich history and expertise, Quapri is at the forefront
                of the print-on-demand sector in India. The company's vision
                extends beyond national borders, as it aspires to assume a
                prominent role on the global stage. Through a commitment to
                quality, innovation, and a strong network of delivery
                facilities, Quapri aims to provide exceptional services to
                clients not only in India but also on an international scale,
                positioning itself as a frontrunner in the ever-evolving
                print-on-demand industry.
              </div>
              <div className="pt-3">
                Based in Bangalore, India, our cutting-edge production facility
                spans over 10,000 square feet, enabling us to provide
                high-quality products. You can easily make orders on our
                website, Quapri.in, or reach out to our dedicated teams for
                assistance.
              </div>
              <div className="pt-3 py-3">
                Our headquarters are located in Bangalore, India, and we take
                pride in our modern production facility that covers more than
                10,000 square feet. This advanced facility equips us with the
                capabilities to produce and deliver top-quality products. If
                you're looking to place orders, our user-friendly website,
                Quapri.in, offers a convenient and efficient way to do so.
                Alternatively, our dedicated teams are readily available to
                assist you with any inquiries or specific requirements you may
                have. Whether you need assistance with your order or have
                questions about our services, don't hesitate to get in touch
                with our knowledgeable and responsive teams. Your satisfaction
                and the success of your projects are our top priorities.
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HomePage;
