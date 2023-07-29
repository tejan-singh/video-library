import { createContext, useReducer } from "react";
import { categories } from "../data/categories";
import { videos } from "../data/videos";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    categories: categories,
    allVideos: videos,
    filteredVideos: videos,
    watchLater: []
  };

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "SEARCH":
        return {
          ...state,
          filteredVideos: videos.filter(({ title }) =>
            title.toLowerCase().includes(action.payload.toLowerCase().trim())
          ),
        };

      default:
        return state;
    }
  };

  const [appState, dispatch] = useReducer(reducerFun, initialState);
  console.log(appState);
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
