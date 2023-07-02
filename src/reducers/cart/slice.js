import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    reducers: {
        setCart: (state, action) => {
            state.value = action.payload
        },
        addCart: (state, action) => {
            const existPosition = state.value.find(o => (
                o.title === action.payload.title
            ))
            if (existPosition?.size === action.payload.size &&
                existPosition?.price === action.payload.price) {
                existPosition.count += action.payload.count
            } else {
                state.value = [
                    ...state.value,
                    action.payload
                ]
            }
        },
        removeCart: (state, action) => {
            state.value = state.value.filter(o => o.id !== action.payload)
        },
    }
})

export const {
    setCart,
    addCart,
    removeCart,
} = cartSlice.actions

export default cartSlice.reducer