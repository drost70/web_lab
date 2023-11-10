import React from 'react';
import ProductCard from './ProductCard';

function CatalogPage({ products, sortType }) {
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

  const sortedProducts = [...products].sort(sortProducts);

  return (
    <div className="catalog-page">
      <h1>Catalog</h1>
      <div className="product-list">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
