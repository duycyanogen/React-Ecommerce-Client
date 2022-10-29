import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer';
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reduxStore = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
  // other store enhancers if any
));

root.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
