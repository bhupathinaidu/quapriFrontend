import React from 'react';
import "./homepage.css"
import { useSelector } from 'react-redux';
import { currentUser } from '../../store/test/test.reducer';
import TestComponent from '../../components/test-component/test.comopent';
import NavbarComponent from '../../components/navbar/navbar.component';
import HeaderComponent from '../../components/header/header.component';
import ServiceNavbarComponent from '../../components/servicesNav/servicesNav.component';
import CarouselComponent from '../../components/carousel/carousel.component';
import { photoProductCarousel, promoCarousel, servicesCarousel } from '../../commom/carousel.constants';
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
      <div className='photoProductContainer'>
        <ProductHeadingComponent heading="Photo Products" />
        <CarouselComponent properties={photoProductCarousel} />
      </div>
      <div className='newLaunchesContainer'>
        <ProductHeadingComponent heading="New Launches" />
        <CarouselComponent properties={photoProductCarousel} />
      </div>
      <div className='corporateGiftsContainer'>
        <ProductHeadingComponent heading="Corporate Gifts" />
        <CarouselComponent properties={photoProductCarousel} />
      </div>
      <div className='stationeryContainer'>
        <ProductHeadingComponent heading="Stationery" />
        <CarouselComponent properties={photoProductCarousel} />
      </div>
      <div className='packagingContainer'>
        <ProductHeadingComponent heading="Packaging" />
        <CarouselComponent properties={photoProductCarousel} />
      </div>
      <div className='signMarketingContainer'>
        <ProductHeadingComponent heading="Signs & Marketing" />
        <CarouselComponent properties={photoProductCarousel} />
      </div>
      </div>
    </header>
  </div>)
}

export default HomePage
