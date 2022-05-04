import { ProductsState, OneProduct } from '../models/redux-models';
import { createSlice, PayloadAction, isPending } from '@reduxjs/toolkit';
import { fetchProducts } from './products-action';

// Initialize state :
const initialProductsState: ProductsState = {
    products: [],
    count: 0,
    productClicked: {
        product: {
            _id: "",
            name: "",
            description: "",
            image: "",
            price: 0,
            tags: [] 
        }
    },
    loading: false,  // Better for load --> next step
};

const productsSlice = createSlice({

    name:'products',
    initialState: initialProductsState,

    reducers : {
        
        setProducts(state, action:PayloadAction<ProductsState>){
            let trueValue = state.products.length === 1 ? [...state.products , ...action.payload.products] : action.payload.products;
            state.products = trueValue;
            state.count = action.payload.count;
            state.loading = false;
        },

        setParticularProduct(state, action:PayloadAction<OneProduct>){
            state.productClicked = action.payload;
        },

        updateParticularProduct(state, action:PayloadAction<OneProduct>){
            state.productClicked = action.payload;
        },

        createNewProduct(state, action:PayloadAction<OneProduct>) {
            state.products.push(action.payload.product);
        },
    },

    // extraReducers: (builder) => {
    //     builder.addMatcher(fetchProducts.pending, (state, action) => {

    //     })
    // }
});

export default productsSlice;