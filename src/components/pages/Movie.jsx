import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";
import { fench } from "../../services/fench";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const { user, session } = useContext(UserContext);

  async function handleAddToWatchList() {
    if (session) {
      const result = await fench.post(`account/${user.id}/favorite`, {
        media_type: "movie",
        media_id: movie.id,
        favorite: true,
      });

      toast.success(`${movie.title} added to your favorites.`);

      console.log(result);
    } else {
      toast.error("Please login!");
    }
  }

  async function loadMovie() {
    const { data } = await fench.get(`movie/${id}`);

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

          <button
            className="p-2 bg-blue-600 text-white"
            onClick={handleAddToWatchList}
          >
            Add to watch list!
          </button>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
