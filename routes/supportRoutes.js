const express = require('express');
const Support = require('../models/Support');
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const support = new Support(req.body);
    await support.save();
    res.status(201).json({ message: 'Support created successfully', support });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const supports = await Support.find();
    res.status(200).json(supports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const support = await Support.findById(req.params.id);
    if (!support) {
      return res.status(404).json({ message: 'Support not found' });
    }
    res.status(200).json(support);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const support = await Support.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!support) {
      return res.status(404).json({ message: 'Support not found' });
    }
    res.status(200).json({ message: 'Support updated successfully', support });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const support = await Support.findByIdAndDelete(req.params.id);
    if (!support) {
      return res.status(404).json({ message: 'Support not found' });
    }
    res.status(200).json({ message: 'Support deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
