const Category = require('../models/category')
const slugify = require("slugify");
const SubCategory = require("../models/subCategory");
const subCategory = require('../models/subCategory');

exports.create = async(req, res) => {
try{
const{item} = req.body
// const category = await new Category({item, slug: slugify(item).toLowerCase()}).save();
res.json(await new Category({item, slug: slugify(item)}).save());

}catch (err){
    console.log(err)
res.status(400).send('Create category failed')

}



};

exports.list = async(req, res) => {
    res.json(await Category.find({}).sort({createdAt: -1}).exec());
      };
    
exports.read = async(req, res) => {
        let category = await Category.findOne({slug: req.params.slug}).exec();
        res.json(Category);
        };

exports.update = async(req, res) => {
            const {item} = req.body;
            try{
                const updated = await Category.findOneAndUpdate(
                    {slug: req.params.slug}, 
                    {item, slug: slugify(item)},
                    {new: true} 
                    );
                    res.json(updated);
            }catch(err){
            res.status(400).send("Category update failed");
            }           
            };


exports.remove = async(req, res) => {
        try{
const deleted = await Category.findOneAndDelete({slug: req.params.slug});
res.json(deleted);

        } catch(err){
            res.status(400).send("category delete failed");
        }  
                };

                exports.getSubCategories = (req, res) => {
                    SubCategory.find({ parent: req.params._id }).exec((err, subs) => {
                      if (err) console.log(err);
                      res.json(subCategories);
                    });
                  };
                  