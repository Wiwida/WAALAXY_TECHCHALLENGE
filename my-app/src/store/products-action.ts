import productsSlice from './products-slice';

// Toolkit : 
import { AnyAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState} from './index';

// Types :
import { ProductsState, OneProduct, ProductSubmitForm } from '../models/redux-models';

// Service request :
import ProductsService from "../service/productsService";

export const productsActions = productsSlice.actions;

// Request all products :
export const fetchProducts = (queryVariable: string): ThunkAction<void,RootState,unknown,AnyAction> => {

    return async( dispatch ) => {  
        const response : ProductsState = await ProductsService.getAllProducts(queryVariable);
        dispatch(productsActions.setProducts(response)); 
    };
};

// Request one product :
export const fetchParticularProduct = (product_id : string): ThunkAction<void,RootState,unknown,AnyAction> => {

    return async( dispatch ) => {  
        const response : OneProduct = await ProductsService.getParticularProduct(product_id);
        dispatch(productsActions.setParticularProduct(response));  
    };
};

// Update one product :
export const updateParticularProduct = (product_id : string, dataTosend: ProductSubmitForm): ThunkAction<void,RootState,unknown,AnyAction> => {

    return async( dispatch ) => {  
        const response : OneProduct = await ProductsService.updateProduct(product_id, dataTosend);
        dispatch(productsActions.updateParticularProduct(response));  
    };
};

// Create one product :
export const createOneProduct = (dataTosend: ProductSubmitForm): ThunkAction<void,RootState,unknown,AnyAction> => {

    return async( dispatch ) => {  
        const response : OneProduct = await ProductsService.createProduct(dataTosend);
        dispatch(productsActions.createNewProduct(response));  
    };
};