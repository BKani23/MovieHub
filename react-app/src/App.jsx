import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.jsx";

function App() {
  return (
    <>
      <MovieProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </MovieProvider>
    </>
  );
}

export default App;
