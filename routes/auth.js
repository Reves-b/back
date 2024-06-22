const express = require ("express");

const router = express.Router();

//middleware
const{authCheck, adminCheck} = require("../middleware/auth")


//controller


const{createOrUpdateUser, currentUser} =  require('../controllers/auth');
const myMiddleware = (req, res, next) => {
    console.log("I M A MIddleware YAY");
    next();
}
router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser);
router.post("/current-admin", authCheck, adminCheck, currentUser);


router.get('/testing', myMiddleware, (req, res)=> {
    res.json({
        data: "you successfully tried middleware"
    })
})
module.exports= router;

