const express = require('express');

const { getTestimonials, loadTests } = require("../controllers/test-controller");

const testRouter = express.Router();

testRouter.get('/', getTestimonials);
testRouter.post('/add', loadTests)

module.exports = testRouter
