import * as Actions from './action';

const initialState = {
    movieList:[],
}

export const productData = (state = initialState, action) => {
    // console.log("Data", data, 'action', action);
    let movieList = [];
    switch (action.type) {
        case Actions.SET_PRODUCT_LIST:
            // console.log('reducer', action);
            return [action.data, ...state]
        case Actions.GET_MOVIES_LIST_SUCCESS:
            return {
                ...state,
                movieList: action.responseData.results,
            }
        default :
            return state;
    }
}