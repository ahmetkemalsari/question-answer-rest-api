const User = require("../Models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");


const register =asyncErrorWrapper(async (req,res,next) => {
    const name = "Se Erdem";
    const email = "sa@gmail.com";
    const password = "q1w";
    
        const user = await User.create({
            name,
            email,
            password
        });
        res
        .status(200)
        .json({
            success : true,
            data : user
        });  
});
const errorTest =(req,res,next) => {
    return next(new TypeError("type error"));
}
module.exports = {
    register,
    errorTest
};