import mongoose from "mongoose";
const {Schema} = mongoose;

const cartSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" ,required:true},
  items: [
    {
      _id:false,
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product",required:true },
      quantity: { type: Number, default: 1 },

    },
    
  ],
});

const Cart = mongoose.model("cart",cartSchema);

export default Cart;
