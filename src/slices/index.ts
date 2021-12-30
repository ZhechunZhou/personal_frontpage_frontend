import {combineReducers, Reducer} from 'redux'
import {RootState} from "../types";
import projectReducer from "./project"

const rootReducer: Reducer<RootState> = combineReducers<RootState>(
    {projectState: projectReducer}
);

export default rootReducer