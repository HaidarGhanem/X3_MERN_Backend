const express = require('express');
const StudentLearn = require('../models/studentLearn'); // استيراد الموديل
const router = express.Router();

// جلب جميع العناصر (GET)
router.get('/', async (req, res) => {
    try {
        const students = await StudentLearn.find();
        res.status(200).json({ students: students });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// إنشاء عنصر جديد (POST)
router.post('/', async (req, res) => {
    try {
        const { image, title, description } = req.body;
        const student = new StudentLearn({ image, title, description });
        await student.save();
        res.status(201).json({ message: "Student Learn entry has been created", student: student });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// تحديث عنصر موجود (PUT)
router.put('/:id', async (req, res) => {
    try {
        const student = await StudentLearn.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!student) {
            return res.status(404).json({ message: "Student Learn entry not found" });
        }
        res.status(200).json({ message: "Student Learn entry has been updated", student: student });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// حذف عنصر (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const student = await StudentLearn.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student Learn entry not found" });
        }
        res.status(200).json({ message: "Student Learn entry has been deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
