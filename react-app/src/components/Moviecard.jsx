import '../styles/moviecard.css'
import React from 'react'
import { FaHeart } from "react-icons/fa";
import { useMovieContext } from '../contexts/MovieContext';

function Moviecard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-card">
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <button
        onClick={onFavoriteClick}
        className={`${favorite ? "like-button-active" : "like-button"}`}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        <FaHeart />
      </button>

      <p className="movie-title">{movie.title}</p>
      <p className="release-date">{movie.release_date}</p>
    </div>
  );
}

export default Moviecard;
