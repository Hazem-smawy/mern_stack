const mongoose = require("mongoose");

const goalScheme = mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:'user'
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model('Goal',goalScheme);