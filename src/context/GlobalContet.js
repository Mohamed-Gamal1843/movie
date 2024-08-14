// import { createContext, useContext, useEffect, useReducer } from "react";
// import { reducer } from "./reducer";
// const initialState = {
//   watchlist: localStorage.getItem("whatchlist")
//     ? JSON.parse(localStorage.getItem("whatchlist"))
//     : [],
//   watched: localStorage.getItem("whatched")
//     ? JSON.parse(localStorage.getItem("whatched"))
//     : [],
// };
//
// export const GlobalContext = createContext(initialState);
//
// const ContextProvider = ({ children }) => {

//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     localStorage.setItem("whatchlist", JSON.stringify(state.watchlist));
//     localStorage.setItem("whatched", JSON.stringify(state.watched));
//   }, [state]);

//   return (
//     <GlobalContext.Provider
//       value={{
//         watchlist: state.watchlist,
//         watched: state.watched,
//         MoviesDispatch: dispatch,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
//
// export default ContextProvider;
//
// export const useMovieContext = () => {
//   return useContext(GlobalContext);
// };

import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const Global = createContext(initialState);

const GlobalContet = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  return (
    <Global.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        moveDispatch: dispatch,
      }}
    >
      {children}
    </Global.Provider>
  );
};
export default GlobalContet;

export const useMovieContext = () => {
  return useContext(Global);
};
