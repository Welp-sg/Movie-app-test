import MovieCard from "../components/Moviecard";
import {useState} from "react"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Inception", release_date: "2010" },
    { id: 2, title: "Interstellar", release_date: "2014" },
    { id: 3, title: "ikuiku", release_date: "2010" },
    { id: 4, title: "saryappa", release_date: "2010" }
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    console.log("Searching for:", query);
  };

  return (
    <div className="home">
        <form onSubmit={ handleSearch} className="search-form">
          <input type="text" placeholder="Search for a movie..." className = "search-input" value ={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          <button type="submit" className = "search-button">Search</button>
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
