const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.post("/", async (req, res) => {
  let department = {
    name: req.body.name,
    head: req.body.head,
    contacts: req.body.contacts,
    image: req.body.image,
  };

  await db.query("INSERT INTO department set ?", department);

  res.redirect(req.header("Referer"));
});

module.exports = router;