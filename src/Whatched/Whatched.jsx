import { useMovieContext } from "../context/GlobalContet";
import styles from "../WatchList/WhatchList.module.css";
import CardMovies from "../CardMovies";
const Whatched = () => {
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
          My Watched
        </h1>
        <span
          style={{
            background: "#aa1ae0",
            padding: "7px 12px",
            borderRadius: "36px",
          }}
        >
          {useMovies.watched.length === 1
            ? useMovies.watched.length + "Movie"
            : useMovies.watched.length + "Movies"}
        </span>
      </div>
      <div className={`${styles.parent_whatchlist} container`}>
        {useMovies.watched.map((movie) => (
          <CardMovies key={movie.imdbID} movie={movie} type="watched" />
        ))}
      </div>
    </>
  );
};

export default Whatched;
