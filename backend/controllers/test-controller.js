const Testimonials = require('../models/Testimonials');

const getTestimonials = async (req, res, next) => {
    let test;
    try {
        test = await Testimonials.find();
    } catch (err) {
        return console.log(err);
    }
    if(!test) {
        return res.status(500).json({
            message: "Unexpected error occured."
        })
    }
    return res.status(200).json({test})
}

const loadTests = async (req, res, next) => {
    const { picture, title, category } = req.body;
    let tests;
    try {
        tests = new Testimonials({
            picture,
            title,
            category
        });
        await tests.save();
    } catch (err){
        return res.json({err});
    }
    if(!tests) {
        return res.status(500).json({message: "Unexpected Error Occurred"});
    }
    return res.status(201).json({tests})
    }

module.exports = {getTestimonials, loadTests}