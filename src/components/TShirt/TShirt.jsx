import React from 'react';
import './TShirt.css'

const TShirt = ({ tShirt,  handleAddToCart}) => {
    const { _id, name, picture, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <button onClick={()=>handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;