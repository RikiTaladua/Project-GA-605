const router = require("express").Router();
const passport = require("passport");

// The root route renders our only view
router.get("/", function (req, res) {
  


  res.redirect("/flights");
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/flights", 
    failureRedirect: "/flights", 
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/flights"); 
  });
});

module.exports = router;