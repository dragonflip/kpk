const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.get("/", async (req, res) => {
  let [result] = await db.query(
    `SELECT * FROM news`
  );
  res.json(result);
});

router.post("/", async (req, res) => {
  let news = {
    name: req.body.name,
    image: req.body.image,
    content: req.body.content,
  };

  await db.query("INSERT INTO news set ?", news);

  res.redirect(req.header("Referer"));
});

module.exports = router;
