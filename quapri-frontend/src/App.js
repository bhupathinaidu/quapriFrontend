import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import HeaderComponent from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import ProductListingComponent from "./components/productListing/product.listing.component";
//import { apparelProps, awardsProps, corporateGiftsProps, drinkwareProps, marketingProps, packagingProps, photogGiftsProps, sameDayDeliveryProps, stationeryProps } from "./commom/listing.constants";
import ProductDetailComponent from "./components/productDetail/product.detail.component";
import { apparelProps, awardsProps, bagPacksProps, bookletsProps, businessCardsProps, corporateGiftsProps, drinkwareProps, giftHampersProps, keyChainsProps, labelsProps, mailerBoxesProps, marketingProps, namePlatesProps, packagingProps, pensProps, photogGiftsProps, sameDayDeliveryProps, signsProps, stationeryProps, stickersLabelsProps } from "./commom/listing.constants";
import ScrollToTopComponent from "./components/scrollToTop/scrollToTop.component";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <ScrollToTopComponent/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/same-day-delivery" element={<ProductListingComponent properties={sameDayDeliveryProps}/>}></Route>
        <Route path="/same-day-delivery/customizable-products/same-day-business-cards"
            element={<ProductDetailComponent route={"Business Cards"}
              subRoute={"Business Cards - Express Delivery"} />}>
          </Route>
        <Route path="/stationery" element={<ProductListingComponent properties={stationeryProps}/>}></Route>
        <Route path="/corporate-gifts" element={<ProductListingComponent properties={corporateGiftsProps}/>}></Route>
        <Route path="/drinkware" element={<ProductListingComponent properties={drinkwareProps}/>}></Route>
        <Route path="/packaging" element={<ProductListingComponent properties={packagingProps}/>}></Route>
        <Route path="/apparel" element={<ProductListingComponent properties={apparelProps}/>}></Route>
        <Route path="/marketing" element={<ProductListingComponent properties={marketingProps}/>}></Route>
        <Route path="/awards" element={<ProductListingComponent properties={awardsProps}/>}></Route>
        <Route path="/photo-gifts" element={<ProductListingComponent properties={photogGiftsProps}/>}></Route>
        <Route path="/stickers-labels" element={<ProductListingComponent properties={stickersLabelsProps}/>}></Route>
        <Route path="/signs" element={<ProductListingComponent properties={signsProps}/>}></Route>
        <Route path="/business-cards" element={<ProductListingComponent properties={businessCardsProps}/>}></Route>
        <Route path="/gift-hampers" element={<ProductListingComponent properties={giftHampersProps}/>}></Route>
        <Route path="/mailer-boxes" element={<ProductListingComponent properties={mailerBoxesProps}/>}></Route>
        <Route path="/bag-packs" element={<ProductListingComponent properties={bagPacksProps}/>}></Route>
        <Route path="/name-plates" element={<ProductListingComponent properties={namePlatesProps}/>}></Route>
        <Route path="/booklets" element={<ProductListingComponent properties={bookletsProps}/>}></Route>
        <Route path="/labels" element={<ProductListingComponent properties={labelsProps}/>}></Route>
        <Route path="/pens" element={<ProductListingComponent properties={pensProps}/>}></Route>
        <Route path="/keychains" element={<ProductListingComponent properties={keyChainsProps}/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
