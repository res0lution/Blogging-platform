const express = require("express");

const {
  signup,
  signin,
  signout,
  forgotPassword,
  resetPassword,
  preSignup,
  googleLogin,
  facebookLogin,
} = require("../controllers/auth");
const { runValidation } = require("../validators");
const {
  userSignupValidator,
  userSigninValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../validators/auth");

const router = express.Router();

router.get("/signout", signout);

router.post("/pre-signup", userSignupValidator, runValidation, preSignup);
router.post("/signup", signup);
router.post("/signin", userSigninValidator, runValidation, signin);
router.post("/google-login", googleLogin);
router.post("/facebook-login", facebookLogin);

router.put(
  "/forgot-password",
  forgotPasswordValidator,
  runValidation,
  forgotPassword
);
router.put(
  "/reset-password",
  resetPasswordValidator,
  runValidation,
  resetPassword
);

module.exports = router;
