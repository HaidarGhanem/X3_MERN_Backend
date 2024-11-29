
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const session = require('express-session');

const app = express();
const PORT = 3000;

connectDB();

app.use(session({
    secret: 'schoolWebsite', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// مسارات API
app.use('/api/testimonial', require('./routes/Testimonial'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/teachers', require('./routes/teachers'));
app.use('/api/faqsection', require('./routes/faqSection'));
app.use('/api/visions', require('./routes/visionRoutes')); 
app.use('/api/supports', require('./routes/supportRoutes')); 
app.use('/api/contacts', require('./routes/contactRoutes')); 

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
});
