import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


const defaultState = {
  weather: {},
  loading: false,
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'loading':
    return {loading: true,}
    case 'weather':
      return {
        weather: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


