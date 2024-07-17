import axios from 'axios';
import iziToast from 'izitoast';
import { getGallery } from './render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { showLoader } from '../main';
import { hideLoader } from '../main';
import { hideLoadBtn } from '../main';
import { showLoadBtn } from '../main';
import { showBottomLoader } from '../main';
import { inputValue } from '../main';
import { gallery } from '../main';
import { perPage } from '../main';
// import { loadBtn } from '../main';

const key = '23547596-77757707a75e05ac426ee1dd8';
const baseURL = 'https://pixabay.com/api/';
const loadBtn = document.querySelector('.load');
let lightbox;
let page = 0;

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

loadBtn.addEventListener('click', loadHandler);
export function loadHandler(event) {
  showBottomLoader();
  hideLoadBtn();
  event.preventDefault();
  page += 1;
  getImages(inputValue, page, perPage)
    .then(images => {
      hideLoader();
      gallery.insertAdjacentHTML('beforeend', getGallery(images));
      lightbox = new SimpleLightbox('.gallery a', {});
      lightbox.refresh();
      if (page * perPage > images.totalHits) {
        iziToast.show({
          message: "We're sorry, but you've reached the end of search results.",
          messageColor: 'black',
          color: 'red',
          position: 'topRight',
        });
      } else {
        showLoadBtn();
      }
    })
    .catch(err => console.log(err));
}
