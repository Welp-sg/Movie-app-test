function Moviecard({movie}){

    function onFavoriteClick() {
        alert('added to favorites')
    }

return(
    <>
    <div className="movie-card">
    <div className="movie-poster">
        <img src={movie.url} alt={movie.title}/>
        <div className="movie-overlay">
            <button className="favorite-btn" onClick={onFavoriteClick}> ♥ </button>
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