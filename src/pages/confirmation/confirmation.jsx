import React from 'react';
import { useSelector } from 'react-redux';
import { confirmDetails } from '../../store/confirm/confirm.reducer';
import "./confirmation.css"

const ConfirmationPage = ({setShowConfirmModal}) => {
    const confirmProduct = useSelector(confirmDetails);
    return (
        <div className='container'>
            <button onClick={setShowConfirmModal} className='closeConfirm'>X</button>
            <h1 className="confirmHeading">Confirmation</h1>
            <div className='confirmationWrapper'>
                <div className='confirmProductDetails'>
                    <h1>{confirmProduct?.quantity + " " + confirmProduct?.name}</h1>
                    <div className='confirmDetails'>
                        <p>Quantity: <span>{confirmProduct?.quantity}</span></p>
                        <p>Material: <span>{confirmProduct?.materials}</span></p>
                    </div>

                    <p>Front: </p>
                    <div className="imageContainer">
                        <img src={sessionStorage.getItem("savedJpeg")} />
                    </div>

                </div>
                <div className='orderSummary'>
                    <h1>Order Summary</h1>
                    <p>Per peice cost (Inclusive taxes): <span>{" ₹ " + confirmProduct?.cost / (+confirmProduct?.quantity)?.toFixed(2)}</span></p>
                    <p>Quantity: <span>{confirmProduct?.quantity}</span></p>
                    <p>Total cost: <span>{" ₹ " + confirmProduct?.cost}</span></p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>

    )
}

export default ConfirmationPage;