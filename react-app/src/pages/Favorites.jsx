import { useMovieContext } from "../contexts/MovieContext";
import Moviecard from "../components/Moviecard";
import NoMovies from "../components/NoMovies.jsx";
import { useEffect, useRef } from "react";

function Favorites() {
  const { favorites } = useMovieContext();
  const containerRef = useRef(null);

  // Trigger fade-in animation
  useEffect(() => {
    if (containerRef.current && favorites.length > 0) {
      const cards = containerRef.current.children;
      Array.from(cards).forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("fade-in-right");
        }, index * 100);
      });
    }
  }, [favorites]);

  return (
    <div className="favorites-page">
      {favorites.length > 0 ? (
        <div className="movies-container" ref={containerRef}>
          {favorites.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <NoMovies />
      )}
    </div>
  );
}

export default Favorites;
