import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
    email:{type:String,required:true},
    isVerified:{type : Boolean,default:false},
  created_at: { type: Date, default: Date.now },

});

const User = mongoose.model('User', userSchema);
export default User;
