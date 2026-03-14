const router = require("express").Router();
const { verifyUser } = require("../Middlewares/AuthMiddleware");

router.get("/dashboard", verifyUser, (req, res) => {
  res.json({
    message: "Welcome to Dashboard",
    user: req.user.username,
  });
});

module.exports = router;