import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {
  Vmain
} from "./components";
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Vmain/>}/>
    </Routes>
  </Router>,
  document.getElementById("root")
);


serviceWorker.unregister();
reportWebVitals();
