import express, { json } from "express";

import { addCartItem,getCartItem,deleteCartItem,decreaseItemQuantity,placeOrder } from "../Controller/cart.handler.js";



const  router = express.Router();
router 
    .put('/addItem', addCartItem)
    .get('/getItems/:id',getCartItem)
    .put('/deleteItem/',deleteCartItem)
    .put('/decreaseQuantity',decreaseItemQuantity)
    .post('/generateBill',placeOrder);

export default router;