import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'count',
    initialState: {
        value: 1
    },
    reducers: {
        setCount: (state, action) => {
            state.value = action.payload
        },
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    }
})

export const {
    setCount,
    increment,
    decrement,
} = countSlice.actions

export default countSlice.reducer