// Initialize and import components : 
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './views/App/App';
import reportWebVitals from './reportWebVitals';
import store from './store/index'; 
import { Provider } from 'react-redux';

// PrimeReact :
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                
 

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


