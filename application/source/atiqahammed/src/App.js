import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import grtteingImage from './stuffs/img/Hi.png';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="d-flex justify-content-center">
        <img src={grtteingImage} className='img-fluid' alt='Hi, I am Atiq Ahammed'></img>
      </div>
    </Fragment>
    
  );
}

export default App;
