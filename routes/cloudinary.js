const express = require ("express");
const router = express.Router();


//middleware
const{authCheck, adminCheck} = require("../middleware/auth")

//controllers
const {upload, remove} = require("../controllers/cloudinary");


router.post('/uploadimages', authCheck, adminCheck, upload)
router.post('/removeimage', authCheck, adminCheck, remove)



module.exports = router;