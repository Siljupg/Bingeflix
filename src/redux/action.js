export const PRODUCT_LIST = 'PRODUCT_LIST';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';

export const getProductList = (data) => {
    return {
        type: PRODUCT_LIST,
        data,
    }
}
