import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button/Button';
import { ThreeCircles } from 'react-loader-spinner';
import FetchImages from './GalleryApi/GalleryApi';
import { useRef } from 'react';

function App() {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useRef({
    ADDRESS: 'https://pixabay.com/api/',
    KEY: '29510729-da386a69ed783c050b927561b',
  });

  useEffect(() => {
    if (input) {
      const { ADDRESS, KEY } = params.current;
      setLoading(true);

      FetchImages(ADDRESS, KEY, page, input)
        .then(imgArr => setData(prevData => [...prevData, ...imgArr.hits]))
        .catch(error => console.log(error))
        .finally(setLoading(false));
      return;
    }
  }, [input, page, params]);

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
