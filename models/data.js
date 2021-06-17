const Joi = require("joi");
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  amount: {
    type: Number,
  },
});

const Data = mongoose.model("Data", dataSchema);

function validateData(data) {
  const schema = Joi.object({
    date: Joi.date().required(),
    amount: Joi.number(),
  });

  return schema.validate(data);
}

exports.dataSchema = dataSchema;
exports.Data = Data;
exports.validate = validateData;
