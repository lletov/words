import React, { useState, useEffect } from 'react';

export default function Filters ({ items, onSelect, selected }) {

  const handleClick = (item) => {
    onSelect(item);
  };

  return (
    <div className="res-tip">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className={`btn-m ${selected === item ? 'accent' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
