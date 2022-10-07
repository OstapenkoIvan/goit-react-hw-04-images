import React, { useState, useEffect } from 'react';

import { ThreeCircles } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import FetchImages from '../api/GalleryApi';
import Button from './Button/Button';

function App() {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (input) {
      setLoading(true);

      FetchImages(page, input)
        .then(imgArr => {
          if (page > 1) setData(prevData => [...prevData, ...imgArr.hits]);
          else setData(imgArr.hits);
        })
        .catch(error => console.log(error))
        .finally(setLoading(false));
      return;
    }
  }, [input, page]);

  const onSubmit = input => {
    setInput(input);
    setPage(1);
  };

  const onClick = e => {
    if (e) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <>
      <SearchBar onSub={onSubmit} />
      {data && <ImageGallery inputData={data} />}
      {loading && (
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      )}
      {input && !loading && <Button handleClick={onClick} />}
      <ToastContainer />
    </>
  );
}

export default App;

//fetch change to async/await+
//write props +
//status machine (1.13) -
//make alert +
