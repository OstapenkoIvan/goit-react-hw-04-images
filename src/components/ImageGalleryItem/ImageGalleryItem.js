import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

function ImageGalleryItem({ inputData }) {
  const [modalImage, setModalImage] = useState('');

  const handleClick = img => {
    if (!modalImage) {
      const { largeImageURL, tags } = img;
      setModalImage({ tags, largeImageURL });
      return;
    }

    setModalImage(null);
    return;
  };

  return (
    <>
      {inputData.map(img => (
        <li className="ImageGalleryItem" key={img.id}>
          <img
            className="ImageGalleryItem-image"
            src={img.webformatURL}
            alt={img.tags}
            onClick={() => handleClick(img)}
          />
        </li>
      ))}
      {modalImage && (
        <Modal
          img={modalImage.largeImageURL}
          alt={modalImage.tags}
          onClose={handleClick}
        />
      )}
    </>
  );
}

ImageGalleryItem.prototype = {
  inputData: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGalleryItem;
