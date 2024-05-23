/** @format */

import mongoose from "mongoose";

const propertiesSchema = new mongoose.Schema({
  propertyname: {
    type: String,
    required: [true, "Please provide Property Title"],
    unique: true,
  },

});

const Properties = mongoose.models.properties || mongoose.model("properties", propertiesSchema);

export default Properties;
