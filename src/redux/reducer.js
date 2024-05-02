import * as Actions from './action';

const initialState = {
    movieList:[],
    genreList:[],
}

export const productData = (state = initialState, action) => {
    // console.log("Data", data, 'action', action);
    let movieList = [];
    let genreList = [];
    switch (action.type) {
        case Actions.SET_PRODUCT_LIST:
            // console.log('reducer', action);
            return [action.data, ...state]
        case Actions.GET_MOVIES_LIST_SUCCESS:
            return {
                ...state,
                movieList: action.responseData.results,
            }
        case Actions.GET_GENRE_LIST_SUCCESS:
            return {
                ...state,
                genreList: action.responseData.results,
            }
        default :
            return state;
    }
}