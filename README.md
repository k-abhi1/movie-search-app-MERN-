# 🎬 Movie Search App

The **Movie Search App** is a full-stack web application that allows users to search for movies and view detailed information such as plot summaries, ratings, and poster images. It demonstrates how to integrate third-party APIs using a modern tech stack.

## 🛠️ Tech Stack

- **Frontend:** React, Axios / Fetch API, CSS
- **Backend:** Node.js, Express.js
- **API:** OMDb API (http://www.omdbapi.com/)

## 🚀 Features

- Search movies by name
- View movie details including:
  - Title
  - Poster
  - Plot
  - Genre
  - IMDb rating
- Responsive UI
- Backend proxy server to protect API keys

## 📁 Project Structure

movie-search-app/
│
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── App.js
│ └── index.js
│
├── server/ # Node.js backend
│ ├── index.js
│ └── .env # Contains OMDB API key
│
└── README.md


## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/k-abhi1/movie-search-app-MERN
cd movie-search-app

cd server
npm install

cd ../client
npm install

OMDB_API_KEY=your_api_key_here

cd server
npm start

cd ../client
npm start

