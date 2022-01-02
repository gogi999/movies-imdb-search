import { combineReducers } from 'redux';
import { showMoviesReducer, moviesInfoReducer } from './moviesReducers';
import { showDetailsReducer, movieDetailReducer } from './detailReducers';
import { searchReducer } from './searchReducers';

const reducers = combineReducers({
    search: searchReducer,
    showMovies: showMoviesReducer,
    moviesInfo: moviesInfoReducer,
    showDetails: showDetailsReducer,
    movieDetail: movieDetailReducer    
});

export default reducers;
