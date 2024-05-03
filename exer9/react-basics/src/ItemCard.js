//to render items component
import React from "react";

export function ItemCard(props){
    let items = props.data;

    const addToCart = (item) => { //function for click event
        console.log("Added " + item.name + " to cart!");
        alert("Added " + item.name + " to cart!");
    }

    return (
        <div class="item-cards">
            {
                items.map((item) => {
                    return <div className="item-card">
                        <img class="item-image" src={item.image} alt="Image of item"></img>
                        <p><b>{item.name}</b></p>
                        <p><button class="add-to-cart" onClick={() => addToCart(item)}>Add to Cart</button></p>
                    </div>
                })
            }
        </div>
    );
}
export default ItemCard