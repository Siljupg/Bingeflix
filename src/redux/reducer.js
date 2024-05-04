import * as Actions from './action';

const initialState = {
    movieList:[],
    genreList:[],
    topRatedMoviesList:[],
    actionMoviesList:[],
}

export const productData = (state = initialState, action) => {
    // console.log("Data", data, 'action', action);
    let movieList = [];
    let genreList = [];
    let topRatedMoviesList = [];
    let actionMoviesList = [];
    switch (action.type) {
        case Actions.SET_PRODUCT_LIST:
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
                case Actions.GET_TOPRATED_MOVIES_SUCCESS:
                    return {
                        ...state,
                        topRatedMoviesList: action.responseData.results,
                    }
                case Actions.GET_ACTION_MOVIES_SUCCESS:
                    return {
                        ...state,
                        actionMoviesList: action.responseData.results,
                    }
        default :
            return state;
    }
}