import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "firebase/firestore";
import firebase from "firebase/app"


// Import the functions you need from the SDKs you need
// import  {initializeApp}  from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-FWnf19auAA2tMqVrQWeWf3z1Pr_BQpQ",
  authDomain: "cart-3fd5c.firebaseapp.com",
  projectId: "cart-3fd5c",
  storageBucket: "cart-3fd5c.appspot.com",
  messagingSenderId: "937733915680",
  appId: "1:937733915680:web:52dcbfa3bed3551fd8a845"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
