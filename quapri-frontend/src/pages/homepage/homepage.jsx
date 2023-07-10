import React from 'react';
import "./homepage.css"
import { useSelector } from 'react-redux';
import { currentUser } from '../../store/test/test.reducer';
import TestComponent from '../../components/test-component/test.comopent';
import NavbarComponent from '../../components/navbar/navbar.component';
import HeaderComponent from '../../components/header/header.component';
import ServiceNavbarComponent from '../../components/servicesNav/servicesNav.component';
import CarouselComponent from '../../components/carousel/carousel.component';
import { promoCarousel, servicesCarousel } from '../../commom/carousel.constants';
import ProductHeadingComponent from '../../components/productHeading/product.heading.component';
import { productList } from '../../commom/product.constants';
import ProductCardComponent from '../../components/productCard/product.card.component';


const HomePage = () => {
  const user = useSelector(currentUser);

  return (<div className="App">
    <header className="App-header">
      <NavbarComponent />
      <HeaderComponent />
      <ServiceNavbarComponent />
      <CarouselComponent properties={promoCarousel} />
      <CarouselComponent properties={servicesCarousel} />
      <div className='popularProductsConatiner'>
        <ProductHeadingComponent heading="Popular Products" />
        <div className='popularProducts'>
          {productList.map(item => <ProductCardComponent item={item} />)}
        </div>
      </div>
    </header>
  </div>)
}

export default HomePage
