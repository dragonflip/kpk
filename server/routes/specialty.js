const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.post("/", async (req, res) => {
  let specialty = {
  	department_id: "...",
    name: req.body.name,
    education_type: "...",
    qualification: req.body.qualification,
    study_period: req.body.period,
    description: req.body.description,
  };

  await db.query("INSERT INTO specialties set ?", specialty);

  res.redirect(req.header("Referer"));
});

module.exports = router;
