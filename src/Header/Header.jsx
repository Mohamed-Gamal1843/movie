import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h2 className={styles.logo}>Movie</h2>
        <ul className={styles.navHeader}>
          <li>
            <Link to="/">WatchList</Link>
          </li>
          <li>
            <Link to="/whatched">Watched</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
