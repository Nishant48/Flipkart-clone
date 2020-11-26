import React, { useEffect, useState } from 'react';
import Slideshow from './Slideshow';
import './CSS/Body.css';
import Product from './Product';
import db from './firebase';
function Body() {

    const [electronicsItem, setElectronicsItems] = useState([]);
    const [mensclothes, setMensclothes] = useState([]);
    
    useEffect(() => {
        db.collection('electronics')
                    .onSnapshot(snapshot => (
                        setElectronicsItems(snapshot.docs.map(doc => doc.data()))
                    ))
        db.collection('mensclothes')
                    .onSnapshot(snapshot => (
                        setMensclothes(snapshot.docs.map(doc => doc.data()))
                    ))
    },[]);

    return (
        <div className="body">
            <Slideshow />
            <div className="body_row" >
                <div className="body_rowtitle">
                    <p>Electronics</p>
                </div>
                <div className="body_rowproducts">
                    
                    {electronicsItem.map(item => (
                            <Product item={item}  />
                    ))}
                    {electronicsItem.map(item => (
                            <Product item={item}  />
                    ))}
                
                </div>
            </div>
            <div className="body_row" >
                <div className="body_rowtitle">
                    <p>Men's Clothes</p>
                </div>
                <div className="body_rowproducts">
                    
                    {mensclothes.map(item => (
                            <Product item={item}  />
                    ))}
                    {mensclothes.map(item => (
                            <Product item={item}  />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Body;
