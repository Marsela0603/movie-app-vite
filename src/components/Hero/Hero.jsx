// import styles from "./Hero.module.css";
// import { useEffect, useState } from "react";

// function Hero() {
//     const [movie, setMovie] = useState({});

//     useEffect(() => {
//         async function fetchMovie() {
//             const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
//             const response = await fetch(url);
//             const data = await response.json();
//             setMovie(data);
//         }

//         fetchMovie();
//     }, []);

//     return (
//         <div className={styles.container}>
//             <section className={styles.hero}>
//                 <div className={styles.hero__left}>
//                     <h2 className={styles.hero__title}> {movie.Title}</h2>
//                     <h3 className={styles.hero__genre}>
//                         Genre: {movie.Genre}
//                     </h3>
//                     <p className={styles.hero__description}>
//                         {movie.Plot}
//                     </p>
//                     <button className={styles.hero__button}>Watch</button>
//                 </div>
//                 <div className={styles.hero__right}>
//                     <img className={styles.hero__image} 
//                     src={movie.Poster} 
//                     alt={movie.Title} />

//                 </div>
                
//             </section>
//         </div>
//     );
// }

// export default Hero;
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

const HeroTitle = styled.h2`
  color: #4361ee;
  margin-bottom: 1rem;
  font-size: 2.44rem;
`;

const HeroGenre = styled.h3`
  color: #b5179e;
  margin-bottom: 1rem;
  font-size: 1.59rem;
`;

const HeroDescription = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
`;

const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #4361ee;
  color: #fff;
`;

const HeroRight = styled.div`
  flex-basis: 50%;  /* Ukuran kanan sekitar 50% */
  display: flex;
  justify-content: center; /* Supaya gambar di tengah area kanan */
  align-items: center;
  
  @media (max-width: 991px) {
    margin-top: 1rem;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  max-height: 300px; 
  width: auto;
  height: auto;
  border-radius: 25px;
  object-fit: contain; 
`;

function Hero() {
  const [movie, setMovie] = useState({});

 useEffect(() => {
  async function fetchTrendingMovies() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[0];
  }

  async function fetchDetailMovie() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const trendingMovie = await fetchTrendingMovies();
    const id = trendingMovie.id;

    const params = `?api_key=${API_KEY}&append_to_response=videos`;
    const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
    const response = await axios(URL);
    setMovie(response.data);
  }

  fetchDetailMovie();
}, []);

  return (
     <Container>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>{movie.title || movie.original_title}</HeroTitle>
          <HeroGenre>
            Genre: {movie.genres?.map((g) => g.name).join(', ') || "-"}
          </HeroGenre>
          <HeroDescription>{movie.overview}</HeroDescription>
          <HeroButton>Watch</HeroButton>
        </HeroLeft>
        <HeroRight>
          {movie.poster_path && (
            <HeroImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.original_title}
            />
          )}
        </HeroRight>
      </HeroSection>
    </Container>
  );
}

export default Hero;
