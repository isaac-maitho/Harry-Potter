"use client"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"; // Import the Provider component
import './index.css';
import store from './store';
import App from '../app/page'

export function ReduxProvider({children}){
return(
   <Provider store ={store}>
    {children}
   </Provider>
   ,document.getElementById('root')
);
}