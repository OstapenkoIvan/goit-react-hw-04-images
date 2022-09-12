import PropTypes from 'prop-types';
import React from 'react';

function Button({ handleClick }) {
  const onClickEvent = e => {
    handleClick(e);
  };

  return (
    <div type="button" className="Button" onClick={onClickEvent}>
      Load more
    </div>
  );
}

Button.prototype = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
