
import {GET_FILMS_LIST} from './types';
import {SET_FILMS_LIST} from './types';
import {SEARCH_BY_TEXT} from './types';
import {SORT_BY} from './types';
import {RESET_SORTING} from './types';
import {SET_LIKED_FILM} from './types'
import {SET_DISLIKED_FILM} from './types'
import {SET_STARS_ON_FILM} from './types'
import {INSERT_FILM_INFO} from './types'


import {data} from '../data'
import * as utils from './utils';


const initialState = {
    films: data.movies,
    _originalFilms: data.movies,
    viewed: null
}

export const filmlistReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
        case GET_FILMS_LIST: {
            return state
        }

        case SET_FILMS_LIST: {
            return {...state, films: state.films}
        }

        case SEARCH_BY_TEXT: {
            const { filteredFilms } = utils.SEARCH_BY_TEXT(action.text, state._originalFilms);

            return {...state, films: filteredFilms}
        }

        case SORT_BY: {
            const { films } = state, property = action.property;
            const sorted = [...films].sort((a, b) => b[property] - a[property]);

            return {...state, films: sorted}
        }

        case RESET_SORTING: {
            return {...state, films: state._originalFilms}
        }

        case SET_LIKED_FILM: {
            const { films } = state, { id } = action;
            const film = films.find(film => film.id === id);

            let maxLikes = film.likes;
            if (!film.liked) {
                ++maxLikes
                film.disliked = false
            } else {
                --maxLikes
            }

            const {updateFilmsArray, copyModifiedFilms} = 
            utils.updateFilmsArray(state, film, 'likes', maxLikes, 'like')

            return {...state, films: updateFilmsArray, _originalFilms: copyModifiedFilms}
        }

        case SET_DISLIKED_FILM: {
            const { films } = state, { id } = action;
            const film = films.find(film => film.id === id);

            let maxLikes = film.likes;
            if (film.liked) {
              --maxLikes
              film.liked = !film.liked
            }

            const { updateFilmsArray, copyModifiedFilms } = 
            utils.updateFilmsArray(state, film, 'likes', maxLikes, 'dislike')

            return {...state, films: updateFilmsArray, _originalFilms: copyModifiedFilms}
        }

        case SET_STARS_ON_FILM: {
            const { films } = state;
            const { stars, id } = action;

            const film = films.find(film => film.id === id);
            
            const { updateFilmsArray, copyModifiedFilms } = 
            utils.updateFilmsArray(state, film, 'stars', stars)

            return {...state, films: updateFilmsArray, _originalFilms: copyModifiedFilms}
        }
        
        case INSERT_FILM_INFO: {
            const { films } = state, id = action.id;
            const film = films.find(film => film.id === id);

            return {...state, viewed: film}
        }
    }
}