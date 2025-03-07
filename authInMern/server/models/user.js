const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const Joi=require('joi');
const passwordComplexity=require("joi-password-complexity");


const userSchema=new mongoose.Schema({
    firstName:{ type:String, required:true},
    lastName:{ type:String, required:true},
    email:{ type:String, required:true},
    password:{ type:String, required:true},
});

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:'30d'});
    return token;
};


const User=mongoose.model("User",userSchema);
// const Target=mongoose.model("Target", targetSchema);
const validate=(data)=>{
    const complexityOptions = {
        min: 8,                  // minimum password length
        max: 30,                 // maximum password length
        lowerCase: 1,            // require at least 1 lowercase letter
        upperCase: 1,            // require at least 1 uppercase letter
        numeric: 1,              // require at least 1 digit
        symbol: 1,               // require at least 1 special character
        requirementCount: 4,     // total number of requirements to satisfy
    };
    const schema=Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports={User, validate};


