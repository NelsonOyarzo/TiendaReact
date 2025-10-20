import React from 'react';
export default function SearchBar({value, onChange, placeholder}) {
  return (
    <input type="search" className="form-control mb-3" placeholder={placeholder||'Buscar...'} value={value} onChange={e=>onChange && onChange(e.target.value)} />
  );
}