import { useMovieContext } from "./context/GlobalContet";
import styles from "./WatchList/WhatchList.module.css";
import * as actions from "./context/ActionTypes";

const ButtonControl = ({ movie, type }) => {
  const useMovies = useMovieContext();

  return (
    <div>
      {type === "watchlist" && (
        <div className={styles.btn_controls}>
          <button
            onClick={() =>
              useMovies.moveDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye"></i>
          </button>
          <button
            onClick={() =>
              useMovies.moveDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie.imdbID,
              })
            }
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
      {/*  */}
      {type === "watched" && (
        <div className={styles.btn_controls}>
          <button
            onClick={() =>
              useMovies.moveDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye-slash"></i>
          </button>
          <button
            onClick={() =>
              useMovies.moveDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonControl;
