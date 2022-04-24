import { ActionTypes, Action } from '../actionTypes/actionTypes';

interface StateProducts {
    products: Product[],
    loading: boolean,
    error: string | null,
}

const initialState = {
    products : [],
    loading: false, 
    error: null,
}

export const reducer = (state: StateProducts = initialState, action: Action) : StateProducts => {

    switch(action.type) {
        case ActionTypes.FETCH__PRODUCT:
            return {
                ...state,
                loading: true,
            }
        case ActionTypes.FETCH__PRODUCT_SUCCESS:
            return {
                ...state, 
                products: action.payload,
            }
        case ActionTypes.FETCH__PRODUCT_FAIL:
            return {
                ...state, 
                error: action.payload,
            }
        default: 
            return state;
        };
};

export default reducer;