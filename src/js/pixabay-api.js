import axios from 'axios';

const key = '23547596-77757707a75e05ac426ee1dd8';
const baseURL = 'https://pixabay.com/api/';

export async function getImages(query, page, perPage = 15) {
  const searchParams = new URLSearchParams({
    key: key,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: perPage,
    page: page,
  }).toString();

  const url = `${baseURL}?${searchParams}`;

  return axios.get(url).then(function (response) {
    return response.data;
  });
}
