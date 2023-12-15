import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import CameraDetailsPage from './CameraDetailsPage';
import SortingOptions from './SortingOptions';
import { useParams } from 'react-router-dom';
import productsData from './productsData';

function CatalogPage() {
  const { id } = useParams();
  const [sortType, setSortType] = useState('');
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []); 

  const sortProducts = (a, b) => {
    if (sortType === 'priceAsc') {
      return a.price - b.price;
    } else if (sortType === 'priceDesc') {
      return b.price - a.price;
    } else if (sortType === 'nameAsc') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'nameDesc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  };

  const handleSortChange = (selectedSortType) => {
    setSortType(selectedSortType);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort(sortProducts);

  return (
    <div className="catalog-page">
      <SortingOptions onSortChange={handleSortChange} onSearch={handleSearch} />
      <div className="product-list">
        {Array.isArray(sortedProducts) &&
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      {id && <CameraDetailsPage camera={findCameraById(products, id)} />}
    </div>
  );
}

function findCameraById(cameras, cameraId) {
  return Array.isArray(cameras)
    ? cameras.find((camera) => camera.id.toString() === cameraId)
    : null;
}

export default CatalogPage;
