import {takeEvery, put, spawn, retry, takeLatest, select, debounce} from 'redux-saga/effects';
import {
    catalogChangeId, catalogChangeOffset, catalogChangeQ,
    catalogFailure,
    catalogRequest,
    catalogSuccess
} from "../reducers/catalog/slice";
import {catalogByCategoriesId, order} from "../api";
import {addCart, removeCart, setCart} from "../reducers/cart/slice";
import {orderFailure, orderRequest, orderSuccess} from "../reducers/order/slice";

function* watchCatalogChangeIdSaga() {
    yield takeEvery(catalogChangeId().type, handleCatalogChangeIdSaga)
}

function* handleCatalogChangeIdSaga(action) {
    yield put(catalogRequest(action.payload))
}

function* watchCatalogRequestSaga() {
    yield takeLatest(catalogRequest().type, handleCatalogRequestSaga)
}

function* handleCatalogRequestSaga() {
    const state = yield select()
    try {
        const retryCount = 3
        const retryDelay = 1000
        const data = yield retry(
            retryCount,
            retryDelay,
            catalogByCategoriesId,
            {
                categoryId: state.catalogReducer.value.categoryId,
                offset: state.catalogReducer.value.offset,
                q: state.catalogReducer.value.q,
            })
        yield put(catalogSuccess(data))
    } catch (e) {
        yield put(catalogFailure(e.message))
    }
}

function* watchCatalogChangeOffsetSaga() {
    yield takeEvery(catalogChangeOffset().type, handleCatalogRequestSaga)
}

function* watchCatalogChangeQSaga() {
    yield debounce(500, catalogChangeQ().type, handleCatalogRequestSaga)
}

function* watchCartSaga() {
    yield takeEvery(addCart().type, handleCartSaga)
    yield takeEvery(removeCart().type, handleCartSaga)
    yield takeEvery(setCart().type, handleCartSaga)
}

function* handleCartSaga() {
    const state = yield select()
    localStorage.setItem('cart', JSON.stringify(state.cartReducer.value))
}

function* watchOrderRequestSaga() {
    yield takeLatest(orderRequest().type, handleOrderRequestSaga)
}

function* handleOrderRequestSaga() {
    const state = yield select()
    try {
        const retryCount = 3
        const retryDelay = 1000
        yield retry(
            retryCount,
            retryDelay,
            order,
            {
                owner: state.orderReducer.value.owner,
                items: state.cartReducer.value,
            }
        )
        yield put(orderSuccess())
    } catch (e) {
        yield put(orderFailure(e.message))
    }
}

function* watchOrderSuccessSaga() {
    yield takeEvery(orderSuccess().type, handleOrderSuccessSaga)
}

function* handleOrderSuccessSaga() {
    yield put(setCart([]))
}

export default function* saga() {
    yield spawn(watchCatalogChangeIdSaga)
    yield spawn(watchCatalogChangeOffsetSaga)
    yield spawn(watchCatalogRequestSaga)
    yield spawn(watchCatalogChangeQSaga)
    yield spawn(watchCartSaga)
    yield spawn(watchOrderRequestSaga)
    yield spawn(watchOrderSuccessSaga)
}