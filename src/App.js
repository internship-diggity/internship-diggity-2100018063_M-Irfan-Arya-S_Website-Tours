import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Examples';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
