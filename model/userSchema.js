const mongoose = require ('mongoose')
const {Schema} = mongoose

const controller = new Schema({
    firstname:{
        type:String,
        required: true,
    },
    lastname:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    isVerified:{
        type: Boolean,
        default: false,
    },

})


module.exports = mongoose.model("controller", controller)