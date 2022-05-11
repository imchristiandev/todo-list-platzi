import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { 
    searchTerm, 
    setSearchTerm 
  } = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <input 
        className="TodoSearch" 
        placeholder="Cebolla" 
        value={searchTerm}
        onChange={onSearchValueChange}
      />
    </>
  )
}

export { TodoSearch };
