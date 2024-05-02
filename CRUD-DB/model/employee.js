import mongoose from "mongoose";

let emp_Schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    /* created:{
        type:Date,
        default:Date.now()
    } */
})

let Employee=mongoose.model('employee',emp_Schema)
export default Employee