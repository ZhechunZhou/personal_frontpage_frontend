import React from 'react'
import {Route, Routes,} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {BlogPage, HomePage, ProjectPage} from "../components";

export const App: React.FC = () => {
    // ===========================================================================
    // Dispatch
    // ===========================================================================
    const dispatch = useDispatch()
    // ===========================================================================
    // Hooks
    // ===========================================================================

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/projects" element={<ProjectPage/>}/>
            <Route path="/blogs" element={<BlogPage/>}/>
        </Routes>
    )
}
