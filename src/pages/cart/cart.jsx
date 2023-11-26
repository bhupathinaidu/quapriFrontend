import React from "react";
import "./cart.css";
import productImg from "../../assets/noteBooks.jpg";

const Cart = () => {
  return (
    <>
      <div className="container mb-3">
        <div className="row">
          <div className="col-12">
            <h2 className="my-4">Quapri Cart</h2>
            <p>Total item in the cart: 1</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 cart-items">
            <div className="quapriCart-card">
              <div className="d-flex flex-column">
                <div className="row no-gutters">
                  <div className="col-2 align-items-center justify-content-center cartProduct-img">
                    <img src={productImg} alt="Quapri Product" />
                  </div>
                  <div className="col cartProduct-desc">
                    <div className="mb-2">
                      <div className="productName">NoteBook</div>
                    </div>
                    <div className="my-2">
                      <div className="productQuantity">
                        <span className="label">Quantity:</span> 1
                      </div>
                    </div>
                    <div className="pt-2 pb-2">
                      <div className="productSpec">Product Specifications</div>
                      <div className="d-flex flex-row mb-2">
                        <div className="product-label">Material</div>
                        <div className="product-desc">100% Cotton</div>
                      </div>
                      <div className="d-flex flex-row mb-2">
                        <div className="product-label">Quantity</div>
                        <div className="product-desc">150</div>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between mt-2 pt-2 productTotal">
                      <div className="total-label">Totals</div>
                      <div className="total-price">&#8377;150</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="cart-summary">
              <div className="px-3">
                <div className="summary-heading mb-2">Summary</div>
                <div className="summary-details">
                  <div className="d-flex justify-content-between">
                    <span className="label">Item Subtotal</span>
                    <span>&#8377;150</span>
                  </div>
                  <div className="item-total d-flex justify-content-between">
                    <div className="total">
                      Item Total(Inclusive of all taxes)
                    </div>
                    <div className="price">&#8377;150</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkoutBtn mt-3">
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
