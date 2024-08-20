import React, { useContext } from 'react'
import CartCard from './CartCard'
import { cartContext } from '../context/CartContext'
function Cart() {
    const {items,totalPrice,totalItems,placeOrder} = useContext(cartContext);   
  return (
    <>
        <div className="md:w-[85vw]  m-auto flex flex-col-reverse flex-reverse sm:flex-row p-8 gap-8 ">
            <div className="shadow-inner flex flex-col gap-4 p-4 bg-white">
                {items?.map((data,indx)=><CartCard key={indx} data={data}/>)}
            </div>

            <div className="flex-1 bg-white flex flex-col gap-4 p-4 sm:sticky h-[300px] max-h-fit top-24 rounded capitalize font-semibold min-w-[220px]">
                <div className=" ">
                    <span className='uppercase font-lg font-semibold text-neutral-400'>Price Details</span>
                </div>
                <div className="border-y-2 py-4 flex flex-col gap-4 ">
                    <div className="flex flex-row justify-between">
                        <span>total items</span>
                        <span>{totalItems}</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span>price</span>
                        <span> ₹{totalPrice}</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <span> Delivery</span>
                        <span>Free</span>
                    </div>
                </div>
                <div className="">
                <div className="flex flex-row justify-between">
                        <span> total Price</span>
                        <span> ₹{totalPrice}</span>
                </div>
                </div>
                <button className=' text-base-100 uppercase py-2 bg-[#16a34a]' onClick={()=>placeOrder()}>Place Order</button>
            </div>
        </div>
    </>
  )
}

export default Cart