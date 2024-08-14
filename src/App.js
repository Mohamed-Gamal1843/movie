import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import "./index.css";
import WhatchList from "./WatchList/WhatchList.jsx";
import Whatched from "./Whatched/Whatched.jsx";
import Add from "./Add/Add.jsx";
import GlobalContet from "./context/GlobalContet.js";

const App = () => {
  return (
    <Router>
      <GlobalContet>
        <Header />
        <Routes>
          <Route path="/" element={<WhatchList />} />
          <Route path="/whatched" element={<Whatched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </GlobalContet>
    </Router>
  );
};

export default App;
