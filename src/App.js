import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout';
import Example from 'pages/Examples';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/properties/:id" element={<DetailsPage />} />
          <Route exact path="/checkout" element={<Checkout />} />
          {/* <Route path="/" element={<Example />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
