import axios from 'axios';
import { Dispatch, Action } from 'redux';
import { ActionTypes } from '../actionTypes/actionTypes';

export const getProducts = () => {
    return async (dispatch: Dispatch<Action>) => {
        console.log('heuyyyyy')
        dispatch({
            type: ActionTypes.FETCH__PRODUCT
        });
        
        try {
            const { data } = await axios.get(`https://technical-test-frontend.herokuapp.com/api/products`);
            
            dispatch({
                type: ActionTypes.FETCH__PRODUCT_SUCCESS,
                payload: data  
            });

        } catch(err) {
            dispatch({
                type: ActionTypes.FETCH__PRODUCT_FAIL,
                payload: err
            });
        }
    }

} 