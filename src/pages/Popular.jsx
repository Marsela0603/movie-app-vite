import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies"; 
import ENDPOINTS from "../utils/constans/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function Popular() {
  // const [movies, setMovies] = useState([]);
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchPopularMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

      // try {
        const response = await axios.get(ENDPOINTS.POPULAR); // ✅ Hapus tanda kurung tutup ekstra
        setMovies(response.data.results);
        // console.log(response.data.results);
      // } catch (error) {
        // console.error("Gagal mengambil data:", error); // ✅ Harus di dalam `catch`
      // }
    }

    fetchPopularMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
}

export default Popular;
