const getcart =()=>{
    const cartitem = localStorage.getItem('cart');
    if(cartitem){
        return JSON.parse(cartitem)
    }
    return [];
}
const removecart= idc=>{
    // console.log(id);
    const cart = getcart();
    const remainingcart = cart.filter (id=>id!== idc);
    saveitem(remainingcart);


}
const saveitem =(cart)=>{
    const savestring = JSON.stringify(cart)
    localStorage.setItem('cart',savestring);
}
const setcarttoLS =(id)=>{
    const cart = getcart();
    cart.push(id);
    saveitem(cart);

}
export {setcarttoLS , getcart, removecart};