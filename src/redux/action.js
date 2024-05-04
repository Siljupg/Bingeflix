export const PRODUCT_LIST = 'PRODUCT_LIST';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const GET_GENRE_LIST = 'GET_GENRE_LIST';
export const GET_GENRE_LIST_SUCCESS = 'GET_GENRE_LIST_SUCCESS';
export const GET_MOVIES_LIST = 'GET_MOVIES_LIST';
export const GET_MOVIES_LIST_SUCCESS = 'GET_MOVIES_LIST_SUCCESS';
export const GET_TOPRATED_MOVIES = 'GET_TOPRATED_MOVIES';
export const GET_TOPRATED_MOVIES_SUCCESS = 'GET_TOPRATED_MOVIES_SUCCESS';
export const GET_ACTION_MOVIES = 'GET_ACTION_MOVIES';
export const GET_ACTION_MOVIES_SUCCESS = 'GET_ACTION_MOVIES_SUCCESS';
export const GET_COMEDY_MOVIES = 'GET_COMEDY_MOVIES';
export const GET_COMEDY_MOVIES_SUCCESS = 'GET_COMEDY_MOVIES_SUCCESS';
export const GET_HORROR_MOVIES = 'GET_HORROR_MOVIES';
export const GET_HORROR_MOVIES_SUCCESS = 'GET_HORROR_MOVIES_SUCCESS';


export const getProductList = (data) => {
    return {
        type: PRODUCT_LIST,
        data,
    }
}

export const getGenreList = (params) => {
    return {
        type: GET_GENRE_LIST,
        params,
    }
}

export const getMoviesList = (params) => {
    return {
        type: GET_MOVIES_LIST,
        params,
    }
}

export const getTopRatedMoviesList = (params) => {
    return {
        type: GET_TOPRATED_MOVIES,
        params,
    }
}

export const getActionMoviesList = (params) => {
    return {
        type: GET_ACTION_MOVIES,
        params,
    }
}

export const getComedyMoviesList = (params) => {
    return {
        type: GET_COMEDY_MOVIES,
        params,
    }
}

export const getHorrorMoviesList = (params) => {
    return {
        type: GET_HORROR_MOVIES,
        params,
    }
}
