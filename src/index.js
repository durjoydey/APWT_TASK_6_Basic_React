import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Foot from "./Components/Foot";
import Head from './Components/Head';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import StudentDetail from './Components/StudentDetail';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Head/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/student/:id">
          <StudentDetail/>
        </Route>
      </Switch>
      <Foot/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();