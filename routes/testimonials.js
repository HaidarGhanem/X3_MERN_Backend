const express = require('express');
const Testimonial = require('../models/Testimonial');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const testimonial = new Testimonial({
        name: req.body.name,
        rating: req.body.rating,
        testimonial: req.body.testimonial
    });
    try {
        const newTestimonial = await testimonial.save();
        res.status(201).json(newTestimonial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Testimonial.deleteOne({ _id: req.params.id });
        res.json({ message: 'Testimonial deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.patch('/:id', async (req, res) => {
    try {
        const updatedTestimonial = await Testimonial.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.json(updatedTestimonial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;