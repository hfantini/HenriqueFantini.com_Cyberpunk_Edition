/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Website

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: Index.js
    Date: 2021/01/07

    Proposal: 

    Website's index module.

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import Main from './view/Main';
import reportWebVitals from './report/reportWebVitals';
import { StateProvider } from "./GlobalStore";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render
(
  <React.StrictMode>

        <StateProvider>
            
            <Router>
                <Main/>
            </Router>

        </StateProvider>

  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals(console.log);
