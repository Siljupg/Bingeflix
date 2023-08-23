export const PRODUCT_LIST = 'PRODUCT_LIST';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const GET_GENRE_LIST = 'GET_GENRE_LIST';
export const GET_GENRE_LIST_SUCCESS = 'GET_GENRE_LIST_SUCCESS';
export const GET_MOVIES_LIST = 'GET_MOVIES_LIST';
export const GET_MOVIES_LIST_SUCCESS = 'GET_MOVIES_LIST_SUCCESS';


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
    console.log('inside', params);
    return {
        type: GET_MOVIES_LIST,
        params,
    }
}