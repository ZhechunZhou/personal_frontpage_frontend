import {put} from "redux-saga/effects";
import {clearProjectFilter, setProjectFilter} from "../slices/project";

export function* clearProjectFilterSaga(): any {
    yield put(clearProjectFilter())
}

export function* setWebFilterSaga(): any {
    yield put(setProjectFilter("web application"))
}

export function* setJavaFilterSaga(): any {
    yield put(setProjectFilter("Core Java"))
}

export function* setDSFilterSaga(): any {
    yield put(setProjectFilter("Distributed System"))
}