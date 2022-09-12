import PropTypes from 'prop-types';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';

function SearchBar({ onSub }) {
  return (
    <header className="header">
      <SearchForm onSub={onSub} />
    </header>
  );
}

SearchBar.propTypes = {
  onSub: PropTypes.func.isRequired,
};

export default SearchBar;
