import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ProjectState} from "../types";

const initialState: ProjectState = {
    filter: ""
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{
        clearProjectFilter(state){
            state.filter = "";
        },

        setProjectFilter(state, {payload}: PayloadAction<string>){
            state.filter = payload;
        }

    }
})

export const {clearProjectFilter, setProjectFilter} = projectSlice.actions;

export default projectSlice.reducer;