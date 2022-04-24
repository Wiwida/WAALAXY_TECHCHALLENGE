import { combineReducers } from 'redux';
import homepageReducer from './homepage';

const rootReducer = combineReducers({
    home: homepageReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;