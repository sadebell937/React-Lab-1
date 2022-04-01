import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import AdDesinger from './Components/AdDesigner';
import Votes from './Components/Votes';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header/>
    <AdDesinger/>
    <Votes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();