const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: true, 
      minlength: 8,
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    email: {
      type: String,
      required: true,
      // unique: true,
      // trim: true,
    },
    chart_data:
      [
        {
          _id: false,
          unique: false,
          male: 0,
          female: 0,
          month: 0,
          detections: 0,
          agegroup: 0,
          gender: 0,
        },
      ],
    device_data:
      [
        {
          name: {
            type: String,
          },
          ip_add: {
            type: String,
          }
        },
      ]
    
  },
  {
    timestamps: true,
  }
);


userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) { // Checks if the password is already modified, you dont want to hash the password again if its already been hashed | Proceeds to the next lifecycle if its already hashed
      next();
    }
// Password Hashing
    const salt = await bcrypt.genSalt(10); // Salt generation | genSalt(saltRounds)
    this.password = await bcrypt.hash(this.password, salt) // Hashes the password with the passed in generated Salt
    next(); // Proceeds to the next lifecycle
})

userSchema.methods.matchPasswords = async function(password) {
  return await bcrypt.compare(password, this.password); // Compares the users passwords, Passed in the login controller and the Databases password
};

userSchema.methods.getJWTSignedToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {  // Signs the id data based on the secret, that becomes an encoded token which is then returned to sendToken function | NOTE how the encoding corresponds to the id
    expiresIn: process.env.JWT_TIME, // Token expiry set to 10 minutes
  });
};

userSchema.methods.getResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString("hex"); // Randomly generates cryptographically pseudo-random data and stores it into resetToken, once generated it will convert the byte data into hexadecimals

  this.resetPasswordToken = crypto
    .createHash("sha256") // Secure Hash Algorithm
    .update(resetToken) // Initialises or Updates(depends if the token has expired) the resetPasswordToken
    .digest("hex"); // Cryptos version of Hashing
  // Good practice to use multiple cryptographic algorithms | However in this case, since this is a resetpassword process, we use crypto for its faster encryption speeds.
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Initialises the resetPasswordExpire field in MongoDB
  return resetToken;
};

userSchema.methods.getUserId = function() {
  return this._id;
}

userSchema.methods.getDashboardData = function() {
  return this.chart_data;
}

userSchema.methods.getDeviceData = function() {
  return this.device_data;
}

const User = mongoose.model('User', userSchema);

module.exports = User;
