import React from 'react'
import {Routes, Route,} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {HomePage} from "../components";

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
                <Route path="/RegisterForm" element={<HomePage/>}/>
            </Routes>
    )
}
