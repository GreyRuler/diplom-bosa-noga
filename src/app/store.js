import createSagaMiddleware from 'redux-saga'
import {configureStore} from "@reduxjs/toolkit";
import catalogReducer from '../reducers/catalog/slice'
import saga from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        catalogReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(saga)

export default store