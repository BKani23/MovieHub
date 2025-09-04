import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NoMovies.css";

function NoMovies() {
  
  const navigate = useNavigate();

  const handleAddMovieClick = () => {

    navigate("/");
  };

  return (
    <div className="no-movies-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="no-movies-icon"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-2a4 4 0 014-4h4m0 0V7a4 4 0 00-4-4H5a4 4 0 00-4 4v8a4 4 0 004 4h4m0 0v2a4 4 0 004 4h4a4 4 0 004-4v-2m-8-4h.01"
        />
      </svg>

      <h2 className="no-movies-title">No Movies Found</h2>
      <p className="no-movies-text">
        Looks like your movie list is empty. Start adding some movies to see them here!
      </p>

      <button onClick={handleAddMovieClick} className="no-movies-button">
        Add a Movie
      </button>
    </div>
  );
}

export default NoMovies;
