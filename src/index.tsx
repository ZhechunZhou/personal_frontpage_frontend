import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {App} from "./containers";
import {PersistGate} from "redux-persist/es/integration/react";
import {persistor, store} from "./utils";
import "./styles/index.css";
import {BrowserRouter} from 'react-router-dom'
import './styles/index.css'

ReactDOM.render(

        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>,
    document.getElementById("root")
);

