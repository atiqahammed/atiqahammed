import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact' component={Contact} />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Fragment>
    
  );
}

export default App;
