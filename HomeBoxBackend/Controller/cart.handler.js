import User from "../Model/user.model.js";
import Cart from "../Model/cart.model.js";
import mongoose from "mongoose";
import { generateBill } from "../nodemailer/nodemailer.js";




export const addCartItem = async (req,res)=>{ 
    const {userId,productId} = req.body; 
    try{ 
         
        const  cart = await Cart.findOne({userId}); //check is userId exits
        if(cart){
            const itemIndex =  cart.items.findIndex(value=>value.productId==productId); //existing item index
            if(itemIndex>-1){
                cart.items[itemIndex].quantity += 1;
            }
            else{
                cart.items.push({productId:productId});
            } 
            cart.save();              
        }
        else{           //new cart object created for first time
            const user = await User.findById(userId); 
            if(user){
                const newCartUser = Cart({
                    userId:userId, 
                    items:[{productId:productId}] 
                });
                newCartUser.save();
            }
            else{
               return res.status(401).json({message:"unauthorize access"});
            }
        }
        res.status(200).json({message:"ok"});  
    }catch(error){
        res.status(500).json({message:error.message});
    }

} 

export const getCartItem = async(req,res)=>{
    const userId=req.params.id;
    try{
     const data = await   Cart.aggregate([
            {
                $match:{userId:new mongoose.Types.ObjectId(userId)}
            },
            {
                $unwind:{path:"$items"}
            },
            {
                $lookup:{
                    from:'products',
                    localField:'items.productId',
                    foreignField:'_id',
                    as:"cartProduct",
                }
            },          
            {
                $unwind:"$cartProduct"
            },
            {
                $group:{
                    _id:"$_id",
                    cartProduct:{$push:{_id:"$cartProduct._id",description:"$cartProduct.description",price:"$cartProduct.price",image:"$cartProduct.image",quantity:"$items.quantity"}}
                }
            },
        ]) ;
        res.status(200)
        res.send(data[0].cartProduct);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const deleteCartItem = async (req,res)=>{
    
    try{
        const {userId,productId} = req.body; 
        const result = await Cart.findOne({userId:userId});
        if(result){
            const index = result.items.findIndex(value=>value.productId==productId); 
            if(index> -1){
                result.items.splice(index,1);
                result.save();
                res.status(200).send({message:"item deleted"});
            }  
        }     
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
}

export const decreaseItemQuantity = async (req,res)=>{
    try{
        const {productId, userId} = req.body;
        const userCart = await Cart.findOne({userId:userId});
        if(userCart){
            const itemIndex = userCart.items.findIndex(value=>value.productId==productId);
            if(itemIndex>-1){
                userCart.items[itemIndex].quantity-=1;
                userCart.save();
                res.status(200).send({message:"quantity updated successfully"});
            }

        }
    }catch(error){
        res.status(500).send(error?error.message:{message:"server error"});
    }
}

export const placeOrder = async (req,res)=>{
    try{
        const {_id,totalPrice} = req.body;
        const user = await User.findById(_id);
        const emailData = {email:user.email,totalPrice:totalPrice}
        const result = generateBill(emailData);
        if(result){
            throw error("mail service not workding try after some time")
        }
        res
        .status(200)
        .send({message:"bill sent to eamil successfully"});
    }catch(error){
        res
        .status(500)
        .send(error?error.message:{message:"server error"});
    }
};