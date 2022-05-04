// Initialize and import components : 
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './views/App/App';
import reportWebVitals from './reportWebVitals';
import store from './store/index'; 
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

// PrimeIcons :              
import "primeicons/primeicons.css";                                
 

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


