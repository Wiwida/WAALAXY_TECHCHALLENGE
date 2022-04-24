export enum ActionTypes {
    FETCH__PRODUCT_SUCCESS = 'FETCH__PRODUCT_SUCCESS',
    FETCH__PRODUCT = 'FETCH__PRODUCT',
    FETCH__PRODUCT_FAIL = 'FETCH__PRODUCT_FAIL',
}

interface fetchProductPending {
    type: ActionTypes.FETCH__PRODUCT;
}

interface fetchProductSuccess {
    type: ActionTypes.FETCH__PRODUCT_SUCCESS;
    payload: Product[];
}

interface fetchProductFail {
    type: ActionTypes.FETCH__PRODUCT_FAIL;
    payload: any;
}

export type Action = fetchProductPending | fetchProductSuccess | fetchProductFail;