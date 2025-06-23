import React, { useState, useEffect } from 'react';

export default function Filters ({ items, onSelect, defaultSelected }) {


useEffect(() => {
    if (defaultSelected) {
      onSelect(defaultSelected);
    }
  }, [defaultSelected, onSelect]);
  const [selected, setSelected] = useState(defaultSelected);

  const handleClick = (item) => {
    setSelected(item);
    onSelect(item);
  };

  return (
    <div className="test-card-tip">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item)}
          className={`btn-m ${selected === item ? 'accent' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
