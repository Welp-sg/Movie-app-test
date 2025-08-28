import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContexts";    
import Moviecard from "../components/MovieCard";

function Favorites(){
    const { favorites } = useMovieContext();

    if (favorites.length === 0) {
        return <div className="favorites-empty">
            <h2>No Favorites Yet</h2>
            <p>Add some movies to your favorites list!</p>
        </div>
    }

    return (
        <div className="favorites-list">
            {favorites.map(movie => (
                <Moviecard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
export default Favorites;