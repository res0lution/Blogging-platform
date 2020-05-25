const express = require("express");
const router = express.Router();

const { requireSignin, adminMiddleware } = require("../controllers/auth");
const { create, list, read, remove } = require("../controllers/tag");
const { runValidation } = require("../validators");
const { createTagValidator } = require("../validators/tag");

router.get("/tags", list);
router.get("/tag/:slug", read);

router.post(
  "/tag",
  createTagValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  create
);

router.delete("/tag/:slug", requireSignin, adminMiddleware, remove);

module.exports = router; 
