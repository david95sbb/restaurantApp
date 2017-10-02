import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Lienzo from './Lienzo';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const _routerLienzo = (
    <BrowserRouter>
        <Route path="/" component={ Lienzo }></Route>
    </BrowserRouter>
);

ReactDOM.render(
    _routerLienzo,
  document.getElementById('root')
);
