import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';


// Your web app's Firebase configuration

const firebaseConfig =  {

  apiKey: "AIzaSyBR6UHV5ITc6SW5YSp0YDCIwl-ZchMRKcY",

  authDomain: "kcs-screen-monitoring.firebaseapp.com",

  projectId: "kcs-screen-monitoring",

  storageBucket: "kcs-screen-monitoring.appspot.com",

  messagingSenderId: "141814134896",

  appId: "1:141814134896:web:f2ce9619429194358b9cb5"

};
const app = initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
