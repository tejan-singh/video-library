import { createContext, useEffect, useReducer } from "react";
import { categories } from "../data/categories";
import { videos } from "../data/videos";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    categories: categories,
    allVideos: videos,
    filteredVideos: videos,
    watchLater: [],
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
      case "ADD_TO_WATCH_LATER":
        const watchLaterVideo = state.allVideos.find(
          (video) => video._id === action.payload
        );
        const updatedAllVideos = state.allVideos.map((video) =>
          video._id === action.payload
            ? { ...video, isWatchLater: true }
            : video
        );
        return {
          ...state,
          watchLater: [
            ...state.watchLater,
            { ...watchLaterVideo, isWatchLater: true },
          ],
          allVideos: updatedAllVideos,
          filteredVideos: updatedAllVideos,
        };

      case "REMOVE_FROM_WATCH_LATER":
        const removeWatchLaterVideo = state.watchLater.filter(
          (video) => video._id !== action.payload
        );
        const updatedAllVideosAfterRemove = state.allVideos.map((video) =>
          video._id === action.payload
            ? { ...video, isWatchLater: false }
            : video
        );
        return {
          ...state,
          watchLater: removeWatchLaterVideo,
          allVideos: updatedAllVideosAfterRemove,
          filteredVideos: updatedAllVideosAfterRemove,
        };
      default:
        return state;
    }
  };

  const removeFromWatchLater = (_id) => {
    dispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: _id });
  };

  const addToWatchLater = (_id) => {
    dispatch({ type: "ADD_TO_WATCH_LATER", payload: _id });
  };

  const [appState, dispatch] = useReducer(reducerFun, initialState);
  console.log(appState);

  return (
    <AppContext.Provider
      value={{ appState, dispatch, removeFromWatchLater, addToWatchLater }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
