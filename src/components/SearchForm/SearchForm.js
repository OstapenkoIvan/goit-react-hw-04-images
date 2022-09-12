import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function SearchForm({ onSub }) {
  const [input, setInput] = useState('');

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() === '') {
      return toast.warn('Enter search name!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    onSub(input);
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={input}
        onChange={handleInput}
      />
    </form>
  );
}

SearchForm.propTypes = {
  onSub: PropTypes.func.isRequired,
};

export default SearchForm;
