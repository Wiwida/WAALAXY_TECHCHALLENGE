import { Product, ProductsState } from "../models/redux-models";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialProductsState: ProductsState = {
    products: [],
    productClicked: {
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
            state.products=action.payload;
        },

        setParticularProduct(state, action:PayloadAction<Product>){
            state.productClicked=action.payload;
        }
    }
});