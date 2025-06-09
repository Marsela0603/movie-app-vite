import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function TopRatedMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRated() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

      try {
        const response = await axios.get(URL);
        setMovies(response.data.results);
        // console.log(response.data.results);
      } catch (error) {
        console.error("Gagal mengambil data top rated:", error);
      }
    }

    fetchTopRated();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default TopRatedMovie;
