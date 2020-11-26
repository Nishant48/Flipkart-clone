import React from 'react';
import './CSS/Cart.css';
import { useStateValue } from './StateProvider';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { getBasketOldTotal, getBasketTotal } from './reducer'

function Cart() {

    const [{ basket }, dispatch] = useStateValue();

    return (
            <div>
                {basket?.length === 0 ? (
                    <div className="cart1">
                        <div className="cart_itemsTitle1">
                                My Cart
                        </div>
                        <div className="cart_empty">
                            <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="empty" />
                            <p className="emptyline">Your Cart is empty!</p>
                            <p className="addline">Add item to it now.</p>
                            <Link to="/home">
                                <button className="shopnow">Shop now</button>
                            </Link>
                        </div>
                    </div>
                ):(
                    <div className="cart">
                        <div className="cart_items">
                            <div className="cart_itemsTitle">
                                My Cart({basket.length})
                            </div>
                            <div className="cart_itemsBody">
                                {basket.map(item => (
                                    <CartItem item={item} />
                                ))}
                            </div>
                            <div className="cart_itemPlaceOrder">
                                <div className="cart_itemPlaceOrderEmpty"></div>
                                <div className="cart_itemPlaceOrderButton" >
                                    <button>PLACE ORDER</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart_total">
                            <div className="cart_totalTitle">
                                PRICE DETAILS
                            </div>
                            <div className="cart_totalBody1" >
                                <p className="cart_totalBody1_p1">Price({basket.length} items)</p>
                                <p className="cart_totalBody1_p2">₹{getBasketTotal(basket)}</p>
                            </div>
                            <div className="cart_totalBody2" >
                                <p className="cart_totalBody2_p1">Delivery Charges</p>
                                <p className="cart_totalBody2_p2">FREE</p>
                            </div>
                            <div className="cart_totalBody3" >
                                <p className="cart_totalBody3_p1">TOTAL AMOUNT</p>
                                <p className="cart_totalBody3_p2">₹{getBasketTotal(basket)}</p>
                            </div>
                            <div className="cart_totalBody4" >
                                You will save ₹{getBasketOldTotal(basket)-getBasketTotal(basket)} on this order
                            </div>
                            <div className="cart_totalBody5" >
                                <p>Save extra ₹25 using 25 SuperCoins on the next step</p>
                                <p>Balance: 64</p>
                            </div>
                        </div>
                    </div>
                )}
           </div>
    )
}

export default Cart;
