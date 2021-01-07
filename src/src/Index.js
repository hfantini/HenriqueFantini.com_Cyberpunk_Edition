/*

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

    HENRIQUEFANTINI.COM - V4.0
    Personal Web Site

    Author: Henrique Fantini
    Contact: contact@henriquefantini.com
   
- - - - - - - - - - - - - - - - - - - - - - - - - - -

    File: Index.js
    Date: 2021/01/07

    Proposal: 

    Website's index page.

+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +

*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import reportWebVitals from './reports/reportWebVitals';

ReactDOM.render
(
  <React.StrictMode>
      
    <Main />

  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals(console.log);
