import productsSlice from './products-slice';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import {RootState} from './index';
import { Product } from "../models/redux-models";
import ProductsService from "../service/productsService";

export const productsActions = productsSlice.actions;

export const fetchProducts = (): ThunkAction<void,RootState,unknown,AnyAction> => {

    return async( dispatch ) => {  
        const response : Product[] = await ProductsService.getAllProducts();
        dispatch(productsActions.setProducts(response));
    };

};

export const fetchParticularProduct = (product_id : string): ThunkAction<void,RootState,unknown,AnyAction> => {

    return async( dispatch ) => {  
        const response : Product = await ProductsService.getParticularProduct(product_id);
        
        dispatch(productsActions.setParticularProduct(response));  
    };
};