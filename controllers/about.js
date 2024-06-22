const About = require("../models/about");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {    
    console.log(req.body);
    req.body.slug = slugify(req.body.story);
    const newAbout = await new About(req.body).save();
    res.json(newAbout);
    } catch (err) {
      console.log(err);
      res.status(400).send("Create about failed");
    }
};
exports.listAll = async (req, res) => {
  let abouts = await About.find({})
    .limit(parseInt(req.params.count))
    .sort([["createdAt", "desc"]])
    .exec();
  res.json(abouts);
};


exports.remove = async (req, res) => {
  try {
    const deleted = await About.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.staus(400).send("About delete failed");
  }
};

exports.read = async (req, res) => {
  let about = await About.findOne({ slug: req.params.slug }).exec();
  res.json(about);
};


exports.list = async (req, res) => {
  // console.table(req.body);
  try {
    // createdAt/updatedAt, desc/asc, 3
    const { sort, order, page } = req.body;
    const currentPage = page || 1;
    const perPage = 3; // 3

    const abouts = await About.find({})
      .skip((currentPage - 1) * perPage)
      .limit(perPage)
      .exec();

    res.json(abouts);
  } catch (err) {
    console.log(err);
  }
};

exports.aboutsCount = async (req, res) => {
  let total = await About.find({}).estimatedDocumentCount().exec();
  res.json(total);
};







exports.aboutsCount = async (req, res) => {
  let total = await About.find({}).estimatedDocumentCount().exec();
  res.json(total);
};
