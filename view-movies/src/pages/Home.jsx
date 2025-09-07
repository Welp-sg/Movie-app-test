import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load popular movies initially
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch {
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Handle search form submit
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
    } catch {
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  // Input change handler
  const onSearchChange = (e) => setSearchQuery(e.target.value);

  // Render
  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={onSearchChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
