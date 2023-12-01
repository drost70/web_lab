import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SortingOptions({ onSortChange, onSearch }) {
  const [searchText, setSearchText] = useState('');
  const [selectedSortType, setSelectedSortType] = useState('');
  const navigate = useNavigate();

  const handleSortChange = (e) => {
    const sortType = e.target.value;
    setSelectedSortType(sortType);
    onSortChange(sortType);
    navigate(`?search=${searchText}&sort=${sortType}`);
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    onSearch(searchText);
    navigate(`?search=${searchText}&sort=${selectedSortType}`);
  };

  return (
    <div className="sorting-options">
      <select onChange={handleSortChange}>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="nameAsc">Name: A to Z</option>
        <option value="nameDesc">Name: Z to A</option>
      </select>
      <input type="text" placeholder="Search..." onChange={handleSearchChange} />
    </div>
  );
}

export default SortingOptions;