import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Drizzle, generateStore} from 'drizzle'
import { DrizzleContext } from "drizzle-react";
import "./App.css";

import Migrations from "./contracts/Migrations.json";
import Twittor from "./contracts/Twittor.json";

import MyComponent from './MyComponent'
import store from './middleware'
const options = {contracts: [Migrations, Twittor]};
// const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, store);

ReactDOM.render(
<DrizzleContext.Provider drizzle = {drizzle} >
    <App />
</DrizzleContext.Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
