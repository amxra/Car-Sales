import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux';
import App from './App';
import * as reducers from './state/reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const monsterReducer = combineReducers({
    car: reducers.carReducer,
    store: reducers.storeReducer,
    additionalPrice: reducers.additionalPriceReducer,
})

const store = createStore(
    monsterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )

const rootElement = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, rootElement);