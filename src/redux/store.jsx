import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }, // Define your reducers here

});

export default store;