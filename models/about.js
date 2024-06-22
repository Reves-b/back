const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

const aboutSchema = new mongoose.Schema(
  {
    story: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
      text: true,
    },
    slug: {
      type: String,
    //   unique: true,
      lowercase: true,
      index: true,
    },
    images: {
      type: Array,
    },
    description: {
      type: String,
      maxlength: 2000,
      text: true,
      required:true,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", aboutSchema);
