import movies from './../data.js';

const initialState = {
  favorites: movies,
  displayFavorites: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
