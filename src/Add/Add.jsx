import { useEffect, useState, useRef } from "react";
import styles from "./add.module.css";
import axios from "axios";
import Result from "../Result/Result";

const Add = () => {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [a, setA] = useState(2);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    
    // إلغاء البحث السابق إذا كانت قيمة الإدخال تتغير بسرعة
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      if (value.trim()) {
        axios
          .get(`https://www.omdbapi.com/?s=${value}&apikey=dc941a7b`)
          .then((response) => {
            if (response.data.Search) {
              setMovies(response.data.Search);
              setIsLoaded(true);
            } else {
              setMovies([]);
              setIsLoaded(false);
            }
          })
          .catch((error) => {
            console.log(error);
            setMovies([]);
            setIsLoaded(false);
          });
      } else {
        setMovies([]);
        setIsLoaded(false);
      }
    }, 500);

    return () => clearTimeout(debounceTimeout.current);
  }, [value]);

  useEffect(() => {
    setA(2);
  }, [value]);

  const displayedMovies = movies.slice(0, a);

  return (
    <div className={styles.add}>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search your movies"
        />
        {displayedMovies.map((movie) => (
          <Result key={movie.imdbID} movie={movie} />
        ))}
        {isLoaded && a < movies.length && (
          <button className={styles.see_more} onClick={() => setA(a + 2)}>
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default Add;
