import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/search?query=${query}`);
      if (response.data.Search) {
        setMovies(response.data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError(response.data.Error || 'No movies found');
      }
    } catch (err) {
      setError('Failed to fetch movies');
      console.error(err);
    }
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Movie Search App</h1>
          <SearchBar onSearch={searchMovies} />
        </header>
        <main>
          {error && <div className="error">{error}</div>}
          <Routes>
            <Route path="/" element={<MovieList movies={movies} />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
