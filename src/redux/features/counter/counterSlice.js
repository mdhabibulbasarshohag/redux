import { createSlice } from '@reduxjs/toolkit';
// import { } from 'redux-toolkit';



const initialState = {
    count: 0,
}
const counterSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByValue: (state, action) => {
            state.count += action.payload;
        },
    }
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;