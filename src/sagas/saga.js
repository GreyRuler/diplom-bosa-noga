import {takeEvery, put, spawn, retry, takeLatest, select} from 'redux-saga/effects';
import {
    catalogChangeId, catalogChangeOffset,
    catalogFailure,
    catalogRequest,
    catalogSuccess
} from "../reducers/catalog/slice";
import {catalogByCategoriesId} from "../api";

function* watchCatalogChangeIdSaga() {
    yield takeEvery(catalogChangeId().type, handleCatalogChangeIdSaga)
}

function* handleCatalogChangeIdSaga(action) {
    yield put(catalogRequest(action.payload))
}

function* watchCatalogRequestSaga() {
    yield takeLatest(catalogRequest().type, handleCatalogRequestSaga)
}

function* handleCatalogRequestSaga(action) {
    const state = yield select()
    try {
        const retryCount = 3
        const retryDelay = 1000
        const data = yield retry(
            retryCount,
            retryDelay,
            catalogByCategoriesId,
            {
                categoryId: action.payload,
                offset: state.catalogReducer.value.offset
            })
        yield put(catalogSuccess(data))
    } catch (e) {
        yield put(catalogFailure(e.message))
    }
}

function* watchCatalogChangeOffsetSaga() {
    yield takeEvery(catalogChangeOffset().type, handleCatalogChangeOffsetSaga)
}

function* handleCatalogChangeOffsetSaga() {
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
                offset: state.catalogReducer.value.offset
            })
        yield put(catalogSuccess(data))
    } catch (e) {
        yield put(catalogFailure(e.message))
    }
}

export default function* saga() {
    yield spawn(watchCatalogChangeIdSaga)
    yield spawn(watchCatalogChangeOffsetSaga)
    yield spawn(watchCatalogRequestSaga)
}