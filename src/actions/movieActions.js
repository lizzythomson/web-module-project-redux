export const DELETE_MOVIE = 'DELETE_MOVIE';

export const ADD_MOVIE = 'ADD_MOVIE';

export const addMovie = (id) => {
  console.log('Return the action object.');
  return { type: ADD_MOVIE, payload: id };
};

export const deleteMovie = (id) => {
  console.log('Return the action object.');
  return { type: DELETE_MOVIE, payload: id };
};
