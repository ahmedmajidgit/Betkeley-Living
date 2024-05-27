/** @format */

import mongoose from "mongoose";

const propertiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide Property Title"],
  },
  address: {
    type: String,
    required: [true, "Please provide address"],
  },
  type: {
    type: String,
    required: [true, "Please provide type"],
  },
  bedrooms: {
    type: Number,
    required: [true, "Please provide no. of bedrooms"],
  },
  washrooms: {
    type: Number,
    required: [true, "Please provide no. of washrooms"],
  },
  area: {
    type: Number,
    required: [true, "Please provide area"],
  },
  amount: {
    type: String,
    required: [true, "Please provide amount"],
  },
  status: {
    type: String,
    required: [true, "Please provide status"],
    default: "New",
  },
  disable: {
    type: Boolean,
    default: false,
  },
  images: [{
    type: String,
  }],
  date: {
    type: Date,
    default: new Date(),
  },
});

const Properties = mongoose.models.properties || mongoose.model("properties", propertiesSchema);

export default Properties;
