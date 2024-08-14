import { useMovieContext } from "../context/GlobalContet";
import CardMovies from "../CardMovies";
import styles from "./WhatchList.module.css";
const WhatchList = () => {
  const useMovies = useMovieContext();
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            margin: "30px 0 ",
            fontSize: "26px",
            fontWeight: "bold",
            color: "#f9ff17",
          }}
        >
          My WatchList
        </h1>
        <span
          style={{
            background: "#aa1ae0",
            padding: "7px 12px",
            borderRadius: "36px",
          }}
        >
          {useMovies.watchlist.length === 1
            ? useMovies.watchlist.length + "Movie"
            : useMovies.watchlist.length + "Movies"}
        </span>
      </div>
      <div className={`${styles.parent_whatchlist} container`}>
        {useMovies.watchlist.map((movie) => (
          <CardMovies key={movie.imdbID} movie={movie} type="watchlist" />
        ))}
      </div>
    </>
  );
};

export default WhatchList;
