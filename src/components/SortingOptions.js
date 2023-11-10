import React, { useState } from 'react';
import SortSelect from './SortSelect'; 

function SortingOptions({ onSortChange }) {
  const [priceSortType, setPriceSortType] = useState('priceAsc');
  const [nameSortType, setNameSortType] = useState('nameAsc');

  const handlePriceSortChange = (e) => {
    const selectedSortType = e.target.value;
    setPriceSortType(selectedSortType);
    onSortChange(selectedSortType);
  };

  const handleNameSortChange = (e) => {
    const selectedSortType = e.target.value;
    setNameSortType(selectedSortType);
    onSortChange(selectedSortType);
  };

  const priceOptions = [
    { value: 'priceAsc', label: 'By Price (ascending)' },
    { value: 'priceDesc', label: 'By Price (descending)' },
  ];

  const nameOptions = [
    { value: 'nameAsc', label: 'Alphabetically (ascending)' },
    { value: 'nameDesc', label: 'Alphabetically (descending)' },
  ];

  return (
    <div className="sorting-options">
      <SortSelect
        label="Sort by Price"
        value={priceSortType}
        onChange={handlePriceSortChange}
        options={priceOptions}
      />
      <SortSelect
        label="Sort by Name"
        value={nameSortType}
        onChange={handleNameSortChange}
        options={nameOptions}
      />
    </div>
  );
}

export default SortingOptions;
