import {all, takeLatest} from 'redux-saga/effects'
import {clearProjectFilterSaga, setDSFilterSaga, setJavaFilterSaga, setWebFilterSaga} from "./projectSaga";

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
    yield all([
        takeLatest('SET_WEB_FILTER_SAGA', setWebFilterSaga),
        takeLatest('SET_JAVA_FILTER_SAGA', setJavaFilterSaga),
        takeLatest('SET_DS_FILTER_SAGA', setDSFilterSaga),
        takeLatest('CLEAR_PROJECT_FILTER_SAGA', clearProjectFilterSaga),
    ])
}

export default rootSaga