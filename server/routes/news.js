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
  var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;
  let news = {
    name: req.body.name,  
    date: today,
    image: req.body.image,
    content: req.body.content,
  };

  await db.query("INSERT INTO news set ?", news);

  res.redirect(req.header("Referer"));
});

module.exports = router;
