import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from '../components/UI/Button/Index';
import StyledDetailMovie from "../components/UI/Button/Detail.styled";

function DetailMovie() {
  const { id } = useParams();

  // Create movie state
  const [movie, setMovie] = useState("");

  useEffect(() => {
    // Fetch detail movie
    async function getDetailMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(URL);

      // Update state movie with response
      setMovie(response.data);
    }

    getDetailMovie();
  }, []);

  return (

   <StyledDetailMovie>
  <div className="poster">
    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
  </div>

  <div className="info">
    <h2>Detail Movie</h2>
    <p><strong>{movie.title}</strong></p>
    <p>{movie.overview}</p>
    <Button>Watch</Button>
  </div>
</StyledDetailMovie>
  );
}

export default DetailMovie;
