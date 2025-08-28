import "../css/Moviecard.css"
import { useMovieContext } from "../contexts/MovieContexts";
function Moviecard({movie}){

    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.stopPropagation()
        if (favorite) {
            removeFromFavorites(movie.id)
            alert('removed from favorites')
        } else {
            addToFavorites(movie)
            alert('added to favorites')
        }
    }

return(
    <>
    <div className="movie-card">
    <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}> ♥ </button>
        </div>
    </div>
    <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
    </div>
</div>
    </>
);

}
export default Moviecard;