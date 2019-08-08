import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import App from './App';

const firebaseConfig = {
    apiKey: "AIzaSyC1u9WG_CWpXAmPA2j3A79o7vXEJtPFrhU",
    authDomain: "reactjs-login-flow.firebaseapp.com",
    databaseURL: "https://reactjs-login-flow.firebaseio.com",
    projectId: "reactjs-login-flow",
    storageBucket: "",
    messagingSenderId: "556991728177",
    appId: "1:556991728177:web:caeaf519c80dcf1f"
};

firebase.initializeApp(firebaseConfig);
library.add(fab, fas, far);

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
