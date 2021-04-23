const { Router } = require("express");
const router = Router();
const db = require("../config/db");

router.get("/", async (req, res) => {
  let [result] = await db.query(
    `SELECT * FROM specialties`
  );
  res.json(result);
});

router.post("/", async (req, res) => {
  let specialty = {
  	department_id: 0,
    name: req.body.name,
    education_type: req.body.education_type,
    qualification: req.body.qualification,
    study_period: req.body.study_period,
    description: req.body.description,
  };

  await db.query("INSERT INTO specialties set ?", specialty);

  res.redirect(req.header("Referer"));
});

module.exports = router;
