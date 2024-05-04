import * as Actions from './action';

const initialState = {
    movieList:[],
    genreList:[],
    topRatedMoviesList:[],
    actionMoviesList:[],
    comedyMoviesList:[],
    horrorMoviesList:[],

}

export const productData = (state = initialState, action) => {
    let movieList = [];
    let genreList = [];
    let topRatedMoviesList = [];
    let actionMoviesList = [];
    let comedyMoviesList = [];
    let horrorMoviesList = [];

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
                case Actions.GET_COMEDY_MOVIES_SUCCESS:
                    return {
                        ...state,
                        comedyMoviesList: action.responseData.results,
                    }
                case Actions.GET_HORROR_MOVIES_SUCCESS:
                    return {
                        ...state,
                        horrorMoviesList: action.responseData.results,
                    }
        default :
            return state;
    }
}