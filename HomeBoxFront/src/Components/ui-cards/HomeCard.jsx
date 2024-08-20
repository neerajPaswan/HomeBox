import { useState, useEffect, useContext } from "react";

import React from "react";
import { cartContext } from "../context/CartContext";

function HomeCard({ data }) {

  const {addItemToCart} = useContext(cartContext);

  const { image, price, title, rating,_id } = data;
  if(!image){
    return;
  }

  return (
    <>
      <div className="card   bg-base-100 rounded-none shadow-xl ">
        <figure className="p-4">
        <img className=" h-32" src={image} alt="image" />
        </figure>
        <div className="card-body bg-base-200 flex flex-col  gap-4   ">
          <div className=" flex flex-col gap-2">
          <p>{title.length>40?title.substring(0,40)+ "...":title}</p>
          <form className=" inline ">
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400 "
                disabled
                defaultChecked={1 == Math.floor(rating.rate) ? true : false}
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={2 == Math.floor(rating.rate) ? true : false}
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={3 == Math.floor(rating.rate) ? true : false}
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={4 == Math.floor(rating.rate) ? true : false}
                disabled
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={5 == Math.floor(rating.rate) ? true : false}
                disabled
              />
            </div>
          </form>
          <h2 className=" font-semibold">Price: ₹{price && price}</h2>
          </div>
          <div className="card-actions  bottom-0 ">
            <button onClick={()=>addItemToCart(_id)} className=" w-full btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
