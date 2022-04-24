import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import "bootswatch/dist/zephyr/bootstrap.min.css";

//* Componentes
import Navbar from './components/Navbar';
import Rotas from './components/Rotas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Navbar />
      <Rotas />
    </BrowserRouter>
  
);


