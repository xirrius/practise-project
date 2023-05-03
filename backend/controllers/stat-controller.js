const Stats = require('../models/Stats')

const getStats = async (req, res, next) => {
    let stats;
    try {
        stats = await Stats.find();
    } catch (err) {
        return console.log(err);
    }
    if(!stats) {
        return res.status(500).json({
            message: "Unexpected error occured."
        })
    }
    return res.status(200).json({stats})
}

const loadStats = async (req, res, next) => {
    const { label, value } = req.body;
    let stats;
    try {
        stats = new Stats({
            label, 
            value});
        await stats.save();
    } catch (err){
        return res.json({err});
    }
    if(!stats) {
        return res.status(500).json({message: "Unexpected Error Occurred"});
    }
    return res.status(201).json({stats})
    }

module.exports = {getStats, loadStats}