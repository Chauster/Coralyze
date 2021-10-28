const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

const {
  login,
  register,
  forgotpassword,
  resetpassword,
  clientID,
  insertDefaultChartData,
  getchartdata,
  addDevice,
  getdevicedata,
} = require('../controllers/auth');

router.route('/login').post(login);

router.route('/register').post(register);

router.route('/forgotpassword').post(forgotpassword);

router.route('/resetpassword/:resetToken').put(resetpassword);

router.route('/clientID').post(clientID);

router.route('/insertDefaultChartData').post(insertDefaultChartData);

router.route('/getchartdata/').post(getchartdata);

router.route('/addDevice').post(addDevice);

router.route('/getdevicedata/').post(getdevicedata);

// router.route('/removeDevice/:_id').delete(removeDevice);

// router.route('/updateDevice/').post(updateDevice);

module.exports = router;
