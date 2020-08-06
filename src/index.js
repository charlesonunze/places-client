import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Windmill } from '@windmill/react-ui'

import './assets/css/tailwind.output.css'
import './index.css';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Windmill>
        <App />
      </Windmill>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
