const mongoose = require('mongoose');

let TestimonialsSchema = new mongoose.Schema({
    picture: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});
const testimonial = mongoose.model('Testimonials', TestimonialsSchema)
module.exports = testimonial