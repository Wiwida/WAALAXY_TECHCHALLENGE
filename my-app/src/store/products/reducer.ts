import { Reducer } from "redux";
import { ProductsActionTypes, ProductsState } from "./types";

export const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};
const reducer: Reducer<ProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH__PRODUCT : {
      return { ...state, loading: true };
    }
    case ProductsActionTypes.FETCH__PRODUCT_SUCCESS : {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case ProductsActionTypes.FETCH__PRODUCT_FAIL : {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};
export { reducer as ProductsReducer };