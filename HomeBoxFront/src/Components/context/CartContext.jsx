import React, { Children, useEffect } from 'react';
import { useState,createContext } from 'react';
import { baseUrl } from '../../App';
import axios from 'axios';

export const cartContext = createContext();

function CartContext({children}) {
    const[trigger,setTrigger] = useState(true);
    const [items,setItems] =useState([]);
    const [totalPrice,setTotalPrice] = useState(0);
    const [totalItems,setTotalItem] = useState(0);
    const _id = localStorage.getItem("_id");

    const getCartItems = async()=>{
      try{
        const res = await axios.get(`${baseUrl}/cart/getItems/${_id}`,);
       setItems(res.data);
       setTotalItem(res.data.length);
       const price = Math.floor(res.data.reduce((accu,curr)=>accu+(curr.price*curr.quantity),0)*100)/100;
       setTotalPrice(price);
      }catch(error){
        console.log(error);          
      }
    }

    const addItemToCart = async (productId)=>{
      try{
          const data = {
            userId:_id,
            productId:productId}
          await axios.put(`${baseUrl}/cart/addItem`,data)
          .then(res=>{res.status==200?alert("product added"):""})
      }catch(error){
        alert('please try after some time')
      }
      setTrigger(!trigger);
    }

    const removeItem = async (productId)=>{
      try{
          const data = {
            userId:_id,
            productId:productId}
          await axios.put(`${baseUrl}/cart/deleteItem`,data)
          .then(res=>{res.status==200?alert("product removed from cart"):""})
      }catch(error){
        alert('please try after some time')
      }
      setTrigger(!trigger);
    }

    const decreaseQuantity = async (productId)=>{
      try{
          const data = {
            userId:_id,
            productId:productId}
          await axios.put(`${baseUrl}/cart/decreaseQuantity`,data)
      }catch(error){
        alert('please try after some time')
      }
      setTrigger(!trigger);
    }

    const placeOrder = async () => {
      try {
        const data = { _id, totalPrice };
        await axios.post(`${baseUrl}/cart/generateBill`, data).then((res) => {
          res.status == 200 ? alert("Bill has been sent to your email") : "";
        });
      } catch (error) {
        alert("please try after some time");
      }
      setTrigger(!trigger);
    };

    useEffect(()=>{
      getCartItems();
    },[trigger])

    const value ={items,addItemToCart,totalItems,totalPrice,removeItem,decreaseQuantity,placeOrder};
  return (
    <cartContext.Provider value={value}>{children}</cartContext.Provider>
  )
}

export default CartContext