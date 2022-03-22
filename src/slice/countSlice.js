import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state,action) => {
            state.count += 1;
        },
        decrement: (state,action) => {
            if(state.count>0){
                state.count -= 1;
            }
        }
    }
})

export const {increment, decrement} = counterSlice.actions;

export const selectCounter=(state)=> state.counter.count;

export default counterSlice.reducer;