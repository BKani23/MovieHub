import { useEffect, useState, useRef } from "react";
import Moviecard from "../components/Moviecard.jsx";
import "../styles/Home.css";
import Header from "../components/Header.jsx";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch popular
        const request = await fetch("https://moviehub-8uoj.onrender.com/api/movies/popular");
        const data = await request.json();
        setMovies(data.results || []);

        setError(null);
      } catch (error) {
        setError("Failed to load movies");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    if (!loading && containerRef.current) {
      const cards = containerRef.current.children;
      Array.from(cards).forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("fade-in-right");
        }, index * 100); 
      });
    }
  }, [loading, movies]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    try {
      // Search
      const response = await fetch(
        `https://moviehub-8uoj.onrender.com/api/movies/search?query=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setMovies(data.results || []);
      
    } catch (error) {
      console.log(error);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="searchbar-container">
        <form onSubmit={handleSearch}>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="text"
            placeholder="Enter movie's name"
          />
          <button className="submit-button" type="submit">
            Search
          </button>
        </form>
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="movies-container" ref={containerRef}>
          {movies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
