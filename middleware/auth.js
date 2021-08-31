const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const ErrorResponse = require("../utilities/errorResponse");

exports.auth = async(req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]     // Checks if the token contains 'Bearer' keyword in the authToken | Stored in Headers
    }

    if(!token) {
        return next(new ErrorResponse("You are not authorised to access this route", 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT securely verifies the token(coded above) by decoding the secret(in .env) alongside the token data
    
        const user = await User.findById(decoded.id); // Used as a Promise with Mongoose to check the decoded data matches with the id thats stored in MongoDB atlas
    
        if (!user) {
          return next(new ErrorResponse("No user was found with this id", 404));
        }
    
        req.user = user;
    
        next(); // move onto to next lifecycle -> passed in private.js route
      } catch (err) {
        return next(new ErrorResponse("You are not authorised to access this route", 401));
      }
};