import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CameraDetailsPage from './CameraDetailsPage';
import SortingOptions from './SortingOptions';
import { useParams } from 'react-router-dom';

function CatalogPage({ products }) {
  const { id } = useParams();
  const [sortType, setSortType] = useState('');
  const [searchText, setSearchText] = useState('');

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
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {id && <CameraDetailsPage camera={products.find((camera) => camera.id.toString() === id)} />}
    </div>
  );
}

export default CatalogPage;
