import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
  movies: movies,
  appTitle: 'IMDB Movie Database',
};

const reducer = (state = initialState, action) => {
  console.log('Passes action into reducer.', action);
  switch (action.type) {
    case DELETE_MOVIE:
      console.log('Execute delete action.');
      return {
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      console.log('movie', action.payload);
      return {
        ...state,
        movies: [
          ...movies,
          {
            title: action.payload,
            director: action.payload,
            genre: action.payload,
            metascore: action.payload,
            description: action.payload,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
