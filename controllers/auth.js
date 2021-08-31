const crypto = require('crypto');
const User = require('../models/user.model');
const sendEmail = require('../utilities/sendEmail');
const ErrorResponse = require("../utilities/errorResponse");

exports.register = async (req, res, next) => {
    const { username, password, email } = req.body;
    try {
        const user = await User.create({
            username, password, email
        });
            sendToken(user, 200, res);

    } 
    // catch (error) {
    //     res.status(500).json({
    //         success: false,
    //         error: error.message
    //     });
        
    // }
    catch (err) {
        next(err);
      }
};

exports.login = async (req, res, next) => {
    const { username, password } = req.body;

    if(!username || !password) {
        res.status(400).json({
            success: false,
            error: "Please enter your username and password"
        })
    }

    try {
        const user = await User.findOne({ username }).select("+password");

        if(!user) {
            res.status(400).json({
                success: false, error: "Incorrect username/password – Please check and retry"})
        }

        const isMatched = await user.matchPasswords(password);

        if(!isMatched) {
            res.status(404).json({
                success: false,
                error: "Incorrect username/password – Please check and retry"
            })
        }
        sendToken(user, 200, res);

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }

};

exports.forgotpassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user) {
            next("Email could not be sent", 404);
        }

        const resetToken = user.getResetPasswordToken();

        await user.save(); 

        const resetURL = `http://localhost:3000/resetpassword/${resetToken}`;

        const message = `
            <h1>You have requested a password reset</h1>
            <p>Please go to this link to reset your password</p>
            <a href=${resetURL} clicktracking=off>${resetURL}</a>
        `
        try {
            await sendEmail({
                to: user.email,
                subject: "Reset Password Request",
                text: message
            });

            res.status(200).json({
                success: true,
                data: "Email sent"
            });
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return next(error, 500);
        }
    } catch (error) {
        next(error);
    }
};

exports.resetpassword = async (req, res, next) => {

    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.resetToken)
      .digest("hex");
  
    try {
      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
      });
  
      if (!user) {
        return next(new ErrorResponse("Invalid Token", 400));
      }
  
      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
  
      await user.save();
  
      res.status(201).json({
        success: true,
        data: "Password Updated Successfully",
        token: user.getJWTSignedToken(),
      });
    } catch (err) {
      next(err);
    }
  };

const sendToken = (user, statusCode, res) => {
    const token = user.getJWTSignedToken(); // Encodes token based on the passed in data
    res.status(statusCode).json({ success: true, token}); // Checks whether the token has been encoded successfully
}