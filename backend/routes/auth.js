// Importation

const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/auth");
const password = require("../middleware/password");

// Router pour le login et le signup

router.post("/signup", password, userCtrl.signup);
router.post("/login", password, userCtrl.login);

module.exports = router ;
