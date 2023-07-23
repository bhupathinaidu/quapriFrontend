import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import HeaderComponent from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import ProductListingComponent from "./components/productListing/product.listing.component";
import { acrylicDeskStandsProps, apparelProps, arcylicPrintsProps, awardsProps, bagPacksProps, bannersProps, bookletsProps, businessCardsProps, corporateGiftsProps, courierPolyBagsProps, desktopItemsProps, diariesProps, drinkwareProps, flexiblePouchesProps, foodCakeBoxesProps, giftHampersProps, greetingCardsProps, invitationCardsProps, keyChainsProps, labelsProps, laminatedCardsProps, largeFormatStickerProps, mailerBoxesProps, marketingProps, namePlatesProps, packagingProps, paperBagsProps, pensProps, photoBooksProps, photoFramesProps, photoMugsProps, photoPrintsProps, photogGiftsProps, postersProps, recycledTShirtsProps, sameDayDeliveryProps, sheetStickersProps, signsProps, sleevedMailerBoxesProps, standeesProps, stationeryProps, stickersLabelsProps, sunBoardPostersProps, wallDecalsProps } from "./commom/listing.constants";
import ProductDetailComponent from "./components/productDetail/product.detail.component";
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
        <Route path="/photo-frames" element={<ProductListingComponent properties={photoFramesProps}/>}></Route>
        <Route path="/photo-mugs" element={<ProductListingComponent properties={photoMugsProps}/>}></Route>
        <Route path="/arcylic-prints" element={<ProductListingComponent properties={arcylicPrintsProps}/>}></Route>
        <Route path="/posters" element={<ProductListingComponent properties={postersProps}/>}></Route>
        <Route path="/photo-prints" element={<ProductListingComponent properties={photoPrintsProps}/>}></Route>
        <Route path="/photo-books" element={<ProductListingComponent properties={photoBooksProps}/>}></Route>
        <Route path="/invitation-cards" element={<ProductListingComponent properties={invitationCardsProps}/>}></Route>
        <Route path="/greeting-cards" element={<ProductListingComponent properties={greetingCardsProps}/>}></Route>
        <Route path="/desktop-items" element={<ProductListingComponent properties={desktopItemsProps}/>}></Route>
        <Route path="/acrylic-desk-stands" element={<ProductListingComponent properties={acrylicDeskStandsProps}/>}></Route>
        <Route path="/laminated-cards" element={<ProductListingComponent properties={laminatedCardsProps}/>}></Route>
        <Route path="/flexible-pouches" element={<ProductListingComponent properties={flexiblePouchesProps}/>}></Route>
        <Route path="/recycled-tshirts" element={<ProductListingComponent properties={recycledTShirtsProps}/>}></Route>
        <Route path="/event-id-cards" element={<ProductListingComponent properties={recycledTShirtsProps}/>}></Route>
        <Route path="/sheet-stickers" element={<ProductListingComponent properties={sheetStickersProps}/>}></Route>
        <Route path="/diaries" element={<ProductListingComponent properties={diariesProps}/>}></Route>
        <Route path="/sleeved-mailer-boxes" element={<ProductListingComponent properties={sleevedMailerBoxesProps}/>}></Route>
        <Route path="/paper-bags" element={<ProductListingComponent properties={paperBagsProps}/>}></Route>
        <Route path="/courier-poly-bags" element={<ProductListingComponent properties={courierPolyBagsProps}/>}></Route>
        <Route path="/packing-tapes" element={<ProductListingComponent properties={packagingProps}/>}></Route>
        <Route path="/food-cake-boxes" element={<ProductListingComponent properties={foodCakeBoxesProps}/>}></Route>
        <Route path="/standees" element={<ProductListingComponent properties={standeesProps}/>}></Route>
        <Route path="/lollipop-sign" element={<ProductListingComponent properties={standeesProps}/>}></Route>
        <Route path="/banners" element={<ProductListingComponent properties={bannersProps}/>}></Route>
        <Route path="/large-format-sticker" element={<ProductListingComponent properties={largeFormatStickerProps}/>}></Route>
        <Route path="/wall-decals" element={<ProductListingComponent properties={wallDecalsProps}/>}></Route>
        <Route path="/sun-board-poster" element={<ProductListingComponent properties={sunBoardPostersProps}/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
