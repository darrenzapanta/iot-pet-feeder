const { Data, validate } = require("../models/data");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let data = new Data({
    date: req.body.date,
    amount: req.body.amount,
  });
  data = await data.save();

  res.send(data);
});

module.exports = router;
