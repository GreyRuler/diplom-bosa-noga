import {createSlice} from "@reduxjs/toolkit";

const selectedSizeSlice = createSlice({
    name: 'count',
    initialState: {
        value: ''
    },
    reducers: {
        setSelectedSize: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {
    setSelectedSize,
} = selectedSizeSlice.actions

export default selectedSizeSlice.reducer