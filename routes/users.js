const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const _id = req.body._id;
  const firstName = req.body.firstName;
  const familyName = req.body.familyName;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const phone = Number(req.body.phone);
  // const dob = Date.parse(req.body.dob);

  const newUser = new User({
    _id,
    firstName,
    familyName,
    username,
    password,
    email,
    phone,
    // dob
  });

  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/authenticate/:id').get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user._id = req.body._id;
      user.firstName = req.body.firstName;
      user.familyName = req.body.familyName;
      user.username = req.body.username;
      user.password = req.body.password;
      user.email = req.body.email;
      user.phone = Number(req.body.phone);
      // user.dob = Date.parse(req.body.dob);

      user
        .save()
        .then(() => res.json('User updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

//davo

const {
  login,
  register,
  forgotpassword,
  resetpassword,
} = require("../controllers/auth");

router.route("/login").post(login);

router.route("/register").post(register);

router.route("/forgotpassword").post(forgotpassword);

router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router;
