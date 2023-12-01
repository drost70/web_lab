import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage';
import Navigation from './components/Navigation';
import CameraTypes from './components/CameraTypes';
import CameraDetailsPage from './components/CameraDetailsPage';
import CartPage from './components/CartPage';
import store from './components/redux/store';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
                  <Header showSortingOptions />
                  <CatalogPage />
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
            <Route
              path="/cart"
              element={
                <React.Fragment>
                  <Header />
                  <CartPage />
                  <Footer />
                </React.Fragment>
              }
            />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
