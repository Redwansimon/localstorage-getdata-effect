import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { getcart, removecart, setcarttoLS } from '../../utility/utility';
import Cart from '../cart/Cart';

const Bottles = () => {
    const [bottles, setbottles]=useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data => setbottles(data));

    },[])
    useEffect(()=>{
        console.log('bottle effect ', bottles.length)
        if(bottles.length>0){
            const getcartt = getcart();
            const cartbottle=[];
            for (const id of getcartt){         
                const findbottle = bottles.find(bottle =>bottle.id === id)
                if(findbottle){
                    cartbottle.push(findbottle);
                }     
            }
            setcart(cartbottle);
        }
    },[bottles])
    const [cart , setcart] = useState([]);
    const handler =(bottle)=>{
        const newcart = [...cart , bottle];
        setcart(newcart);
        setcarttoLS(bottle.id);
    }
    const remove =id=>{
        const newcart = cart.filter(bottle=>bottle.id !== id)
        setcart(newcart);
        removecart(id);
    }

    return (
        <div>
            <div className="new">
            <h2>cart length is in new componenet{cart.length}</h2>
                <Cart remove={remove} cart={cart} /></div>
               
            <h2>All bottle list here</h2>
            <div className='bottles'>
            
                {   
                    bottles.map(bottle=> <Bottle 
                        handler ={handler}
                        key={bottle.id} 
                        bottle={bottle}>
                         
                        </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;