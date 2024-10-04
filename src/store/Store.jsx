import { configureStore } from '@reduxjs/toolkit';

import movieReducer from "../store/reducers/MovieSlice";
import tvReducer from "../store/reducers/TvSlice";
import peopleReducer from "../store/reducers/PeopleSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    people: peopleReducer,
    tv: tvReducer,
  },
});

export default store; // This should be a default export
