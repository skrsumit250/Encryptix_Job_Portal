const express = require('express');
const cors = require('cors');
const sequelize = require('./Models/db');
const Job = require('./Models/Jobs');
const User = require('./Models/User');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Database connection
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Unable to connect:', err));

// Sync models
sequelize.sync({ alter: true })
  .then(() => console.log('Tables synced'))
  .catch(err => console.error('Sync error:', err));

// Routes
app.get('/', (req, res) => {
  res.send("Server is running");
});

// Get all jobs
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Post new job
app.post('/postjobs', async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.json({ success: true, id: job.id });
  } catch (err) {
    console.error('Error creating job:', err);
    res.status(500).json({ error: 'Error posting job' });
  }
});

// Handle applications
app.post('/apply', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ success: true, id: user.id });
  } catch (err) {
    console.error('Error saving application:', err);
    res.status(500).json({ error: 'Error submitting application' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
