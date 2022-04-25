import { Product, ProductsState } from "../models/redux-models";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { productsActions } from './products-action';

const initialProductsState: ProductsState = {
    products: [],
    count: 0,
    productClicked: {
        _id: "",
        name: "",
        description: "",
        image: "",
        price: 0,
        tags: []
    },
    loading: false,
    error: null,
};

const productsSlice = createSlice({

    name:'products',
    initialState: initialProductsState,

    reducers:{
        setProducts(state, action:PayloadAction<Product[]>){
            console.log(action.payload)
            state.products = action.payload;
        },

        setParticularProduct(state, action:PayloadAction<Product>){
            state.productClicked = action.payload;
        }
    }
});

export default productsSlice;