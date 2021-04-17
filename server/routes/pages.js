const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.post("/", async (req, res) => {
  let newPage = {
  	title: "...",
  	page_placement: "...",
  	section: "...",
  	url: req.body.url,
  	content: "...",
  };

  await db.query("INSERT INTO pages set ?", newPage);

  res.redirect(req.header("Referer"));
});

module.exports = router;
