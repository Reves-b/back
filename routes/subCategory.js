const express = require ("express");

const router = express.Router();

//middleware
const{authCheck, adminCheck} = require("../middleware/auth")


//controller


const{create, read, update, remove, list} =  require('../controllers/subCategory');


//routes

router.post("/subCategory", authCheck, adminCheck, create);
router.get("/subCategories", list);
router.get("/subCategory/:slug", read);
router.put("/subCategory/:slug", authCheck, adminCheck, update);
router.delete("/subCategory/:slug", authCheck, adminCheck, remove);


module.exports= router;

