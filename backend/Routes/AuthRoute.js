const router = require("express").Router();
const { Signup, Login } = require("../Controllers/AuthController");
const { verifyUser } = require("../Middlewares/AuthMiddleware");

// Signup & Login routes
router.post("/signup", Signup);
router.post("/login", Login);

// Verify token route 
router.get("/verify", verifyUser, (req, res) => { 
    res.json({ status: true, user: req.user.username }); 
});

module.exports = router;