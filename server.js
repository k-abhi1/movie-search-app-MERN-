require('dotenv').config();
const express = require('express');
const axios = require('./backend/node_modules/axios/index.d.cts');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// OMDB API Config
const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_BASE_URL = 'http://www.omdbapi.com/';

// Routes
app.get('/api/search', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&s=${query}`);
    res.json(response.data);
  } catch (error) {
    console.error('OMDB API Error:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

app.get('/api/movie/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&i=${id}`);
    res.json(response.data);
  } catch (error) {
    console.error('OMDB API Error:', error);
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




