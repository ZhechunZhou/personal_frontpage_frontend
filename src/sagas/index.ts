import {all, takeLatest} from 'redux-saga/effects'

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
    yield all([
        // takeLatest('LOGIN_SAGA', ),
    ])
}

export default rootSaga