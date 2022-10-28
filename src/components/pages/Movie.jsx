import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  async function loadMovie() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2d65b06dcf682524c5198a666426664c`
    );

    setMovie(data);
  }

  useEffect(() => {
    loadMovie();
  }, [id]);

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
