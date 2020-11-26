import React from 'react';
import './CSS/CartItem.css';
import { useStateValue } from './StateProvider';

function CartItem({ item }) {

    const [{basket}, dispatch] = useStateValue();

    const handleremove = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: item.id
        })
    }

    return (
        <div className="cartItem">
            <div className="cartItem_img">
                <img src={item.img} alt="cartimg" />
            </div>
            <div className="cartItem_body">
                <div className="cartItem_body_name">{item.name}</div>
                <div className="cartItem_body_subname">
                    <p>Seller: Asianshoe</p>
                    <img src="https://www.adgully.com/img/800/68264_fl.png.jpg" alt="flipkart_assured" />
                </div>
                <div className="cartItem_body_pricediv">
                    <p className="price">₹{item.price}</p>
                    <p className="oldprice">₹{item.oldprice}</p>
                    <p className="discountper">{item.discount}% off</p>
                </div>
                <div className="cartItem_body_remove">
                    <p className="save">SAVE FOR LATER</p>
                    <p className="remove" onClick={handleremove}>REMOVE</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
