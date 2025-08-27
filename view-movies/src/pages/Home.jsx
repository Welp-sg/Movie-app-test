import MovieCard from "../components/MovieCard"; 
import { useState } from "react";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Terminator", release_date: "2010" },
    { id: 2, title: "Interstellar", release_date: "2014" },
    { id: 3, title: "Spiderman", release_date: "2010" },
    { id: 4, title: "Ironman", release_date: "2010" }
  ];

  const handleSearch = (event) => {
    event.preventDefault();
   setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
      </div>
    </div>
  );
}

export default Home;
