const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controllers/private");
const { auth } = require("../middleware/auth");

router.route("/").get(auth, getPrivateData); // auth = req , getPrivateData = res, similar to how we use router.route('/add').post((req, res)

module.exports = router;