import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const initState = {
        header: "Global Header",
        date: "Global Date",
        info: "Global Info",
        backgroundColor: "#FF7F92",
        textColor: "#ffffff"
    }

const myReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_PROJECT_ATTRIBUTE":
            return { ...state, [action.payload.attr]: action.payload.newValue }
        default:
            return state
    }
}

const store = createStore(myReducer, devToolsEnhancer())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </ Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
