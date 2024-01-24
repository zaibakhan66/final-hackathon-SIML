const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/login-tut");

connect.then(() => {
    console.log("Database connected Successfully");
})
.catch(() => {
    console.log("Database connot be connected");
})

const loginSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const collection = new mongoose.model("users", loginSchema);

module.exports = collection;