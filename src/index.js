import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {BrowserRouter as Router} from 'react-router-dom';
import { RecoilRoot } from "recoil";



ReactDOM.render(
  <RecoilRoot>
    <Router>
    <App />
    </Router>
    </RecoilRoot>
  ,
  document.getElementById('root')
);

