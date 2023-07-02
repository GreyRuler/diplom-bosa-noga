import {createSlice} from "@reduxjs/toolkit";

const catalogSlice = createSlice({
    name: 'categories',
    initialState: {
        value: {
            categoryId: undefined,
            offset: 6,
            catalog: [],
            loading: false,
            error: null,
            hasMoreData: true,
        }
    },
    reducers: {
        catalogChangeId: (state, action) => {
            state.value.categoryId = action.payload
            state.value.offset = 6
            state.value.catalog = []
        },
        catalogChangeOffset: (state) => {
            state.value.offset += 6
        },
        catalogRequest: (state) => {
            state.value = {
                ...state.value,
                loading: true,
            }
        },
        catalogSuccess: (state, action) => {
            state.value = {
                ...state.value,
                loading: false,
                catalog: [...state.value.catalog, ...action.payload],
                hasMoreData: action.payload.length >= 6
            }
        },
        catalogFailure: (state, action) => {
            state.value = {
                ...state.value,
                loading: false,
                error: action.payload
            }
        },
    }
})

export const {
    catalogFailure,
    catalogRequest,
    catalogSuccess,
    catalogChangeId,
    catalogChangeOffset
} = catalogSlice.actions

export default catalogSlice.reducer