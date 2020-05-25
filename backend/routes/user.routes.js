const express = require("express");

const {
  requireSignin,
  authMiddleware
} = require("../controllers/auth");
const { read, publicProfile, update, photo } = require("../controllers/user");

const router = express.Router();

router.get("/user/profile", requireSignin, authMiddleware, read);
router.get("/user/:username", publicProfile);
router.get("/user/photo/:username", photo);

router.put("/user/update", requireSignin, authMiddleware, update);

module.exports = router;

