import { useEffect, useState } from "react";
import Header from "../components/Header";

const API_KEY = "d6021d5af87dbc4dcb0adb00ac706908";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      console.log(results);
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Header title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
