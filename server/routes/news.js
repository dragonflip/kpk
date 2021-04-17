const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.post("/", async (req, res) => {
  let news = {
    name: req.body.name,
    image: req.body.img,
    content: "fff",
  };

  await db.query("INSERT INTO news set ?", news);

  res.redirect(req.header("Referer"));
});

module.exports = router;
