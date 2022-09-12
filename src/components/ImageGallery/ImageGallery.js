import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ inputData, webformatURL, id, tags, largeImageURL }) {
  return (
    <>
      <ul className="ImageGallery">
        {inputData && <ImageGalleryItem inputData={inputData} />}
      </ul>
    </>
  );
}

ImageGallery.prototype = {
  inputData: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
