import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './screens/App';
import * as serviceWorker from './serviceWorker';
import Router from './Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

let initialState = {};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const app = <Provider store={store}><Router><App /></Router></Provider>

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
