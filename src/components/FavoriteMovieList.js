import React from 'react';

import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';

import { Link } from 'react-router-dom';

const FavoriteMovieList = (props) => {
  const { favorites, dispatch, displayFavorites } = props;

  return (
    <div className='col-xs savedContainer'>
      <h5>Favorite Movies</h5>
      {displayFavorites &&
        favorites.map((movie) => {
          return (
            <div key={movie.id}>
              <Link
                className='btn btn-light savedButton'
                to={`/movies/${movie.id}`}
              >
                {movie.title}
                <span>
                  <span
                    onClick={() => {
                      dispatch(removeFavorite(movie.id));
                    }}
                    class='material-icons'
                  >
                    remove_circle
                  </span>
                </span>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorite.favorites,
    displayFavorites: state.favorite.displayFavorites,
  };
};

export default connect(mapStateToProps)(FavoriteMovieList);
