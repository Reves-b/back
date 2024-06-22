const SubCategory = require('../models/subCategory')
const slugify = require("slugify");

exports.create = async(req, res) => {
try{
const{item, parent} = req.body
// const category = await new Category({item, slug: slugify(item).toLowerCase()}).save();
res.json(await new SubCategory({item, parent, slug: slugify(item).toLowerCase()}).save());

}catch (err){
    console.log("SUB CREATE ERR ------>", err)
res.status(400).send('Create subCategory failed')

}



};

exports.list = async(req, res) => {
    res.json(await SubCategory.find({}).sort({createdAt: -1}).exec());
      };
    
exports.read = async(req, res) => {
        let subCategory = await SubCategory.findOne({slug: req.params.slug}).exec();
        res.json(subCategory);
        };

exports.update = async(req, res) => {
            const {item, parent} = req.body;
            try{
                const updated = await SubCategory.findOneAndUpdate(
                    {slug: req.params.slug}, 
                    {item, parent, slug: slugify(item)},
                    {new: true} 
                    );
                    res.json(updated);
            }catch(err){
            res.status(400).send("subCategory update failed");
            }           
            };


exports.remove = async(req, res) => {
        try{
const deleted = await SubCategory.findOneAndDelete({slug: req.params.slug});
res.json(deleted);

        } catch(err){
            res.status(400).send("subCategory delete failed");
        }  
                };