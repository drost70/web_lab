import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage';
import Navigation from './components/Navigation';
import CameraTypes from './components/CameraTypes';
import CameraDetailsPage from './components/CameraDetailsPage';
import productsData from "./components/productsData";

import './App.css';

function App() {
  const [sortType, setSortType] = useState('priceAsc');
  const [searchText, setSearchText] = useState('');

  const handleSortChange = (selectedSortType) => {
    setSortType(selectedSortType);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header showSearchBar />
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
                <Header showSortingOptions onSortChange={handleSortChange} onSearch={handleSearch} />
                <CatalogPage products={productsData} sortType={sortType} searchText={searchText} />
                <Footer />
              </React.Fragment>
            }
          />
          <Route
            path="/catalog/:id"
            element={
              <React.Fragment>
                <Header />
                <CameraDetailsPage />
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
