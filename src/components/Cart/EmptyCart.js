import React from 'react';
import jack from "../jack.jpg";

export default function EmptyCart() {
    return (
        <div className="empty-cart">
            <h1>
                your cart is currently empty
            </h1>
            <div className="jack-container">
                <img src={jack} alt="why is the rum gone?" />
            </div>
        </div>
    )
}
