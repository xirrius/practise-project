const express = require('express');

const { getStats, loadStats } = require("../controllers/stat-controller");
const statRouter = express.Router();

statRouter.get('/', getStats);
statRouter.post('/add', loadStats);

module.exports = statRouter
