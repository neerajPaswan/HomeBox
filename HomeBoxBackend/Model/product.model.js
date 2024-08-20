import mongoose from "mongoose";

const {Schema} = mongoose;

const productShema = new Schema({
  productNo: {type:Number,required:true},
  title: {type:String,required:true},
  price: {type:Number,required:true},
  description: {type:String,required:true},
  category: {type:String,required:true},
  image: {type:String,required:true},
  rating: { rate: {type:Number,required:true}, count:{type:Number,required:true} }
})

const Products = mongoose.model('product',productShema);
export default Products;