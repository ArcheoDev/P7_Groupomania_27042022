// Importation
const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/auth");
const userCtrl = require("../controllers/user");
const password = require("../middleware/password");
const auth = require("../middleware/auth");
const upload = require("../middleware/multer-config");

// Post CRUD
router.get("/:id", auth, userCtrl.getOneUser);
router.get("/image/:id", auth, userCtrl.getProfilPicture);
router.put("/:id", auth, upload.single("profil_image"), userCtrl.updateOneUser);

module.exports = router ;
