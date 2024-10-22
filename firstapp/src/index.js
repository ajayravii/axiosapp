import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import App1 from './App1';
import App2 from './App2';
import User from './User';
import Counter from './Counter';
import FeedBackForm from './FeedBackForm';
import ShowData from './ShowData';
import Main from './Main';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Main />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
