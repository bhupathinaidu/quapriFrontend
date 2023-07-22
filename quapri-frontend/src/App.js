import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import HeaderComponent from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import ProductListingComponent from "./components/productListing/product.listing.component";
import { apparelProps, awardsProps, corporateGiftsProps, drinkwareProps, marketingProps, packagingProps, photogGiftsProps, sameDayDeliveryProps, stationeryProps } from "./commom/listing.constants";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/same-day-delivery" element={<ProductListingComponent properties={sameDayDeliveryProps}/>}></Route>
        <Route path="/stationery" element={<ProductListingComponent properties={stationeryProps}/>}>
          
        </Route>
        <Route path="/corporate-gifts" element={<ProductListingComponent properties={corporateGiftsProps}/>}></Route>
        <Route path="/drinkware" element={<ProductListingComponent properties={drinkwareProps}/>}></Route>
        <Route path="/packaging" element={<ProductListingComponent properties={packagingProps}/>}></Route>
        <Route path="/apparel" element={<ProductListingComponent properties={apparelProps}/>}></Route>
        <Route path="/marketing" element={<ProductListingComponent properties={marketingProps}/>}></Route>
        <Route path="/awards" element={<ProductListingComponent properties={awardsProps}/>}></Route>
        <Route path="/photo-gifts" element={<ProductListingComponent properties={photogGiftsProps}/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
