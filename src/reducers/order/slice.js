import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        value: {
            owner: {
                phone: '',
                address: '',
            },
            loading: false,
            error: null,
            success: false,
        }
    },
    reducers: {
        setPhone: (state, action) => {
            state.value.owner.phone = action.payload
        },
        setAddress: (state, action) => {
            state.value.owner.address = action.payload
        },
        setSuccess: (state, action) => {
            state.value.success = action.payload
        },
        orderRequest: (state) => {
            state.value = {
                ...state.value,
                loading: true,
            }
        },
        orderSuccess: (state) => {
            state.value = {
                ...state.value,
                owner: {
                    phone: '',
                    address: '',
                },
                loading: false,
                success: true,
            }
        },
        orderFailure: (state, action) => {
            state.value = {
                ...state.value,
                loading: false,
                error: action.payload
            }
        },
    }
})

export const {
    setPhone,
    setAddress,
    setSuccess,
    orderRequest,
    orderSuccess,
    orderFailure,
} = orderSlice.actions

export default orderSlice.reducer