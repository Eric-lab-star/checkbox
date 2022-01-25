import mongoose from "mongoose";

const CheckBoxSchema = new mongoose.Schema({
  username: String,
  check: Boolean,
});

const CheckBox = mongoose.model("CheckBox", CheckBoxSchema);

export default CheckBox;
