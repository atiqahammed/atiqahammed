import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import grtteingImage from './stuffs/img/Hi.png';

function App() {
  return (
    <div className="d-flex justify-content-center">
      <img src={grtteingImage} className='img-fluid' alt='Hi, I am Atiq Ahammed'></img>
    </div>
  );
}

export default App;
