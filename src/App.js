import React, { useState } from 'react';
import axios from 'axios';

function App() {

  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=montreal&appid=3b44fb6c6ed181b720889c4df1d9d325'
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Montreal</p>
          </div>
          <div className="temp">
            <h1>
              65°F
            </h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>70°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>
              12 MPH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
