import createSagaMiddleware from 'redux-saga'
import {configureStore} from "@reduxjs/toolkit";
import catalogReducer from '../reducers/catalog/slice'
import countReducer from '../reducers/count/slice'
import selectedSizeReducer from '../reducers/selectedSize/slice'
import cartReducer from '../reducers/cart/slice'
import orderReducer from '../reducers/order/slice'
import saga from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        catalogReducer,
        countReducer,
        selectedSizeReducer,
        cartReducer,
        orderReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(saga)

export default store