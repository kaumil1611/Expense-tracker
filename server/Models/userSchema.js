const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    totalExpenseLimit: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.model("User", userSchema);
