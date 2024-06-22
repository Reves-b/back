const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");


const subCategorySchema= new mongoose.Schema({
   item:{
    type:String,
    // trim: true,
    required: "Item is required",
    minlength: [3, "Too short"],
    maxlength:[32, "Too long"],

    },

    slug:{
        type : String,
        unique: true,
        lowercase:true,
        index: true
    },

    

parent: {type: ObjectId, ref: "Category", required: true},

}, 

{timestamps: true}
);

module.exports = mongoose.model('SubCategory', subCategorySchema);