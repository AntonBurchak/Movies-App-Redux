import {GET_FILMS_LIST} from './types'
import {SET_FILMS_LIST} from './types'
import {SEARCH_BY_TEXT} from './types'
import {SORT_BY} from './types'
import {RESET_SORTING} from './types'
import {SET_LIKED_FILM} from './types'
import {SET_DISLIKED_FILM} from './types'
import {SET_STARS_ON_FILM} from './types'
import {GENERATE_HASH} from './types'
import {INSERT_FILM_INFO} from './types'

export const getFilmsList = (payload) => ({
    type: GET_FILMS_LIST,
    payload
}) 

export const setFilmsList = (payload) => ({
    type: SET_FILMS_LIST,
    payload
}) 

export const searchByText = (payload) => ({
    type: SEARCH_BY_TEXT,
    text: payload
})

export const sortBy = (payload) => ({
    type: SORT_BY,
    property: payload
})

export const resetSorting = () => ({
    type: RESET_SORTING
})

export const setLikedFilm = (payload) => ({
    type: SET_LIKED_FILM,
    id: payload
})

export const setDislikedFilm = (payload) => ({
    type: SET_DISLIKED_FILM,
    id: payload
})

export const setStarsOnFilm = (id, stars) => ({
    type: SET_STARS_ON_FILM,
    id,
    stars
})

export const generateHash = () => ({
    type: GENERATE_HASH
})

export const insertFilmInfo = (id) => ({
    type: INSERT_FILM_INFO,
    id
})

