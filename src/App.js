import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage';
import SortingOptions from './components/SortingOptions';
import Navigation from './components/Navigation';
import CameraTypes from './components/CameraTypes';
import productsData from './components/productsData';


import './App.css';

function App() {
  const [sortType, setSortType] = useState('priceAsc'); 

  const handleSortChange = (selectedSortType) => {
    setSortType(selectedSortType); 
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Navigation />
                <CameraTypes />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/catalog"
            element={
              <React.Fragment>
                <Header />
                <SortingOptions onSortChange={handleSortChange} />
                <CatalogPage products={productsData} sortType={sortType} />
                <Footer />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
