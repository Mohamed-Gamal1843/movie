import styles from "./WatchList/WhatchList.module.css";
import ButtonControl from "./ButtonControl";
const CardMovies = ({ movie, type }) => {
  return (
    <div>
      <div key={movie.imdbID} className={styles.wrapper_img}>
        <img src={movie.Poster} alt="" />
        <ButtonControl movie={movie} type={type} />
      </div>
    </div>
  );
};

export default CardMovies;
