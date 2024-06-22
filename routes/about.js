const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middleware/auth");

// controller
const { create, read ,
    listAll,
    remove,
    list,
    aboutsCount,} = require("../controllers/about");

// routes
router.post("/aboutus", authCheck, adminCheck, create);
router.get("/aboutus/:slug", read);
router.get("/aboutus/total", aboutsCount);

router.get("/aboutus/:count", listAll); // abouts/100
router.delete("/aboutus/:slug", authCheck, adminCheck, remove);

router.post("/aboutus", list);

module.exports = router;