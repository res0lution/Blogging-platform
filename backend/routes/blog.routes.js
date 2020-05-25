const express = require("express");

const {
  create,
  list,
  listAllBlogsCategoriesTags,
  read,
  remove,
  update,
  photo,
  listRelated,
  listSearch,
  listByUser,
} = require("../controllers/blog");
const {
  requireSignin,
  adminMiddleware,
  authMiddleware,
  canUpdateDeleteBlog,
} = require("../controllers/auth");

const router = express.Router();

router.get("/blogs", list);
router.get("/blog/:slug", read);
router.get("/blog/photo/:slug", photo);
router.get("/blogs/search", listSearch);
router.get("/:username/blogs", listByUser);

router.post("/blog", requireSignin, adminMiddleware, create);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.post("/blogs/related", listRelated);
router.post("/user/blog", requireSignin, authMiddleware, create);

router.put("/blog/:slug", requireSignin, adminMiddleware, update);
router.put(
  "/user/blog/:slug",
  requireSignin,
  authMiddleware,
  canUpdateDeleteBlog,
  update
);

router.delete(
  "/user/blog/:slug",
  requireSignin,
  authMiddleware,
  canUpdateDeleteBlog,
  remove
);
router.delete("/blog/:slug", requireSignin, adminMiddleware, remove);

module.exports = router;
