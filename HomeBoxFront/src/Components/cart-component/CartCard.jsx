import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";

function CartCard({ data }) {
  const {addItemToCart,removeItem,decreaseQuantity} = useContext(cartContext);
  const { image, price, quantity, description ,_id} = data;
  const handleDecrease =( )=>{
    if(quantity>1){
      decreaseQuantity(_id)
      return ;
    }
    removeItem(_id);
  } 
  
  return (
    <div className="flex flex-col  lg:flex-row lg:gap-8 border-b-2 p-4">
      <div className="flex flex-col gap-2">
        <img className="w-[100px] h-[100px] center m-auto " src={image} alt="image" />
        <div className="flex items-center justify-center gap-4 my-4 font-semibold ">
          <button className="btn btn-circle btn-sm"  onClick={()=>handleDecrease()}>-</button>
          <span>{quantity}</span>
          <button className="btn btn-circle btn-sm" onClick={()=>addItemToCart(_id)}>+</button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 md:gap-4">
        <p className="uppercase">{description.length>50?description.substring(0,50)+ " ...":description } </p>
        <span >Price: <span className="font-semibold">₹{price}</span></span>
        <p>
        <span className="capitalize font-semibold hover:text-primary cursor-pointer" onClick={()=>removeItem(_id)} >Remove from Cart</span>
        </p>
      </div>
      <div className="">
        <span>Delivery | Free</span>
      </div>
    </div>
  );
}

export default CartCard;
