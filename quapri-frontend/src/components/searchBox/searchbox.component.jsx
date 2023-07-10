import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchTerm, setSearchTerm } from '../../store/search/search.reducer';
import "./searchbox.component.css"

const SearchBoxComponent = ({ placeholder }) => {
  //const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const searchVal = useSelector(searchTerm)

  const handleInputChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };



  return (
    <div className='searchBox'>
      <input
        type="text"
        className='searchBoxInput'
        placeholder={placeholder}
        value={searchVal}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBoxComponent;