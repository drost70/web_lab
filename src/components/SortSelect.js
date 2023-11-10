// SortSelect.js
import React from 'react';

function SortSelect({ label, value, onChange, options }) {
  return (
    <div className="sorting-group">
      <label>{label}: </label>
      <select onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortSelect;
