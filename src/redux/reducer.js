import * as Actions from './action';


export const productData = (data = [], action) => {
    switch (action.type) {
        case Actions.SET_PRODUCT_LIST:
            console.log('reducer', action);
            return [action.data, ...data]
        default :
            return data;
    }
}