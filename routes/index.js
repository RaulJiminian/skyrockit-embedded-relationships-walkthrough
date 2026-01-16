const { Router } = require("express");
const authRoutes = require("./auth.js");
const applicationRoutes = require("./applications.js");
const isSignedIn = require("../middleware/is-signed-in.js");

const router = Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.use("/auth", authRoutes);
router.use("/applications", isSignedIn, applicationRoutes);

module.exports = router;
