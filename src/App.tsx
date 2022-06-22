import React from 'react';
import {Provider} from 'react-redux';

import {OrderForm} from './Components/OrderForm/OrderForm';
import {store} from "./store";

function App() {

    return (
        <div className="wrapper">
            <Provider store={store}>
                <OrderForm/>
            </Provider>
        </div>
    );
}

export default App;
