//to render header and cart component
import React from "react";

export function Cart(props){
    let cart = props.data;

    return (
        <div class="cart">
            <p>Shopping Cart: </p>
                    <div className="cart-item">
                        <div className="item-name">
                            <span>Item Name</span>
                            <span>QTY</span>
                            <button className="remove-btn">X</button>
                        </div>
                    </div>
        </div>
    );
}
export default Cart