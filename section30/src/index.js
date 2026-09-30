import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import ProductsProvider from './context/products-context'
import configureStore from './hooks/products-store';


const root = ReactDOM.createRoot(document.getElementById('root'));
configureStore();
root.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);
