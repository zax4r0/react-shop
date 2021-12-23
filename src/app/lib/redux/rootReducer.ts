import {combineReducers} from '@reduxjs/toolkit';
import {productsApi} from '../api/fakestore';
import cartReducer from '../redux/reducers/cartSlice';

import productsReducer from '../redux/reducers/productsSlice';
const rootReducer = combineReducers({
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
