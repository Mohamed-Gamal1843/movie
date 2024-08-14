import styles from "./result.module.css";
import { useMovieContext } from "../context/GlobalContet";
import * as actions from "../context/ActionTypes";

const Result = ({ movie, vref }) => {
  const useMovies = useMovieContext();
  const storeWatchList = useMovies.watchlist.find(
    (e) => e.imdbID === movie.imdbID
  );
  const storeWatched = useMovies.watched.find((e) => e.imdbID === movie.imdbID);
  const wahtchListDis = storeWatched || storeWatchList;
  const wahtchedtDis = storeWatched;

  return (
    <>
      <div className={styles.around_result}>
        <div className={styles.result}>
          {movie.Poster !== "N/A" ? (
            <div className={styles.img_search}>
              <img ref={vref} src={movie.Poster} alt="" />
            </div>
          ) : (
            <div className={styles.not_img}></div>
          )}
          <div className={styles.right_search}>
            <div className={styles.text}>
              <h3 className={styles.h3}> {movie.Title}</h3>
              <h4> {movie.Year}</h4>
            </div>
            <div>
              <button
                disabled={wahtchListDis}
                onClick={() =>
                  useMovies.moveDispatch({
                    type: actions.ADD_MOVIE_TO_WATCHLIST,
                    payload: movie,
                  })
                }
                className={styles.btn_control}
                style={{ marginRight: "12px" }}
              >
                add to watchList
              </button>
              <button
                onClick={() =>
                  useMovies.moveDispatch({
                    type: actions.ADD_MOVIE_TO_WATCHED,
                    payload: movie,
                  })
                }
                disabled={wahtchedtDis}
                className={styles.btn_control}
              >
                add to watched
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
