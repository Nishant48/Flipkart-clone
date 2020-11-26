import React from 'react';
import './CSS/Product.css';
import { useStateValue } from './StateProvider';


function Product({ item }) {

    const [{ basket, no }, dispatch] = useStateValue();

    const handleclick = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item : {
                id: no,
                img: item.img,
                name: item.name,
                rating: item.rating,
                count: item.count,
                price: item.price,
                oldprice: item.oldprice,
                discount: item.discount
            }
        })
    }

    return (
        <div className="product">
            <div className="product_img">
                <img src={item.img} alt="img" />
            </div>
            <div className="product_name">
                <p>{item.name}</p>
            </div>
            <div className="product_rating">
                <div className="rating">{item.rating}{` `}☆</div>
                <div className="count">({item.count})</div>
                <div className="assured">
                    <img src="https://www.adgully.com/img/800/68264_fl.png.jpg" alt="assured" />
                </div>                
            </div>
            <div className="product_price">
                <div className="original_price">₹{item.price}</div>
                <div className="old_price">₹{item.oldprice}</div>
                <div className="discount">{item.discount}% off </div>
            </div>
            <div className="product_button">
                <button onClick={handleclick}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;
