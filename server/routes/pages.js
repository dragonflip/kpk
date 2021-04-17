const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.post("/", async (req, res) => {
  let newPage = {
  	title: req.body.title,
  	page_placement: req.body.page_placement,
  	section: req.body.section,
  	url: req.body.url,
  	content: req.body.content,
  };

  await db.query("INSERT INTO pages set ?", newPage);

  res.redirect(req.header("Referer"));
});

module.exports = router;
