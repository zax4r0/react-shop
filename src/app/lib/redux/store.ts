import {configureStore} from '@reduxjs/toolkit';
import {productsApi} from '../api/fakestore';
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware);
    },
});

export default store;
export type RootState = ReturnType<typeof rootReducer>;
