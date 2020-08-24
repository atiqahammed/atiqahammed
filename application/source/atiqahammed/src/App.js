import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Fragment>
    
  );
}

export default App;
