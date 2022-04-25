import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products-slice';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = configureStore(
  {
      reducer:{products : productsSlice.reducer}
  }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;