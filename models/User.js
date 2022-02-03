const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String },
  },
  { timestamps: true }
);

UserSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("User", UserSchema);
