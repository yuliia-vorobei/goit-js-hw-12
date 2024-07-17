import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api';
import { getGallery } from './js/render-functions';

const formInput = document.querySelector('.form');
const loader = document.querySelector('.loader');
const bottomLoader = document.querySelector('.bottom');
const loadBtn = document.querySelector('.load');
let lightbox;
export const gallery = document.querySelector('.gallery');
export let inputValue = '';
export let perPage = 15;
export let page = 1;

formInput.addEventListener('submit', submitHandler);
export function submitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  inputValue = form.elements.text.value.toLowerCase();
  page = 1;
  if (inputValue === '') {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: 'black',
      color: 'red',
      position: 'topRight',
    });
    return;
  }

  getImages(inputValue, page, perPage)
    .then(images => {
      showLoader();
      if (images.total !== 0) {
        hideLoader();
        gallery.innerHTML = '';
        gallery.insertAdjacentHTML('beforeend', getGallery(images));
        lightbox = new SimpleLightbox('.gallery a', {});
        lightbox.refresh();
        loadBtn.style.visibility = 'visible';
      } else {
        hideLoader();
        gallery.innerHTML = '';
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'black',
          color: 'red',
          position: 'topRight',
        });
      }
    })
    .catch(err => console.log(err))
    .finally(() => formInput.reset());
}

export function showLoader() {
  loader.style.visibility = 'visible';
  bottomLoader.style.visibility = 'visible';
}

export function hideLoader() {
  loader.style.visibility = 'hidden';
  bottomLoader.style.visibility = 'hidden';
}
