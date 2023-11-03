
import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CameraTypes from './components/CameraTypes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <CameraTypes />
      <Footer />
    </div>
  );
}

export default App;
