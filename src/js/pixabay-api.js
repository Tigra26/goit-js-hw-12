import axios from 'axios';

const API_KEY = '30800646-c6d90f2a5eec003f430555754';
axios.defaults.baseURL = 'https://pixabay.com/api/';



export const getImagesByQuery = async (query, page) => {
  const params = {
  key: API_KEY,
  q: query,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page,
  per_page: 15,
}

  const { data } = await axios.get('', { params });
  return data;
};
