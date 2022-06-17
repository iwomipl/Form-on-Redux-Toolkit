import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import {OrderForm} from './Components/Form/Form';
import {store} from "./store";

function App() {

    return (
        <>
            <Provider store={store}>
                <OrderForm/>
            </Provider>
        </>
    );
}

export default App;
