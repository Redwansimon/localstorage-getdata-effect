import './cart.css'
const Cart = ({cart,remove}) => {
    return (
        <div className='cart'> 
            
            {/* {
                cart.map(bottle=><div key={bottle.id}>
                     console.log(bottle)
                    <img src={bottle.img}></img>
                    </div>
                )
            } */}
            {
                cart.map(bottle=>(<div className='hii' key={bottle.id}>
                    <img  src={bottle.img} alt="" />
                    <button onClick={()=>remove(bottle.id)}>remove</button>
                </div>))
            }
        </div>
    );
};

export default Cart;