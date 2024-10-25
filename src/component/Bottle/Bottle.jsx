import React from 'react';
import './Bottle.css'
const Bottle = ({bottle , handler}) => {

    const {img , name, price}=bottle;

    return (
        <div className='bottle'>
            <h2>name :{name}</h2>
            <img src={img} alt="" />
            <h2>price :${price}</h2>
            <button onClick={()=> handler(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;