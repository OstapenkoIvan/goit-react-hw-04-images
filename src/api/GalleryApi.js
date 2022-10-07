import PropTypes from 'prop-types';

const params = {
  ADDRESS: 'https://pixabay.com/api/',
  KEY: '29510729-da386a69ed783c050b927561b',
};

async function fetchImages(page, inputData) {
  const { ADDRESS, KEY } = params;
  const options = new URLSearchParams({
    key: KEY,
    page,
    q: inputData,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  });
  try {
    const response = await fetch(`${ADDRESS}?${options}`);
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    console.log(error.message);
  }
}
// async function fetchImages(address, key, page, inputData) {
//   try {
//     const response = await fetch(
//       `${address}?key=${key}&image_type=photo&orientation=horizontal&page=${page}&per_page=12&q=${inputData}`
//     );
//     const parsed = await response.json();
//     return parsed;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

fetchImages.propTypes = {
  page: PropTypes.number.isRequired,
  inputData: PropTypes.string.isRequired,
};

export default fetchImages;
