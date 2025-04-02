import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: { type: String, unifique: true },
  password: String,
});

export default model("User", userSchema);