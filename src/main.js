import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const formInput = document.querySelector('.form');
const loader = document.querySelector('.loader');
const bottomLoader = document.querySelector('.bottom');
const loadBtn = document.querySelector('.load');
const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {});
let inputValue = '';
let perPage = 15;
let page = 1;

formInput.addEventListener('submit', submitHandler);
loadBtn.addEventListener('click', loadHandler);

async function submitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  inputValue = form.elements.text.value.toLowerCase();
  form.reset();
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
  showLoader();
  try {
    let images = await getImages(inputValue, page, perPage);
    // console.log(images);
    if (images.total !== 0) {
      hideLoader();
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', renderGallery(images));
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
  } catch (error) {
    console.log(error);
  }
}

export async function loadHandler(event) {
  try {
    showBottomLoader();
    hideLoadBtn();
    event.preventDefault();
    page += 1;

    const images = await getImages(inputValue, page, perPage);
    hideLoader();
    gallery.insertAdjacentHTML('beforeend', renderGallery(images));
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

    const galleryItem = document.querySelector('.gallery-item');
    if (galleryItem) {
      const galleryItemHeight = galleryItem.getBoundingClientRect().height;
      window.scrollBy({
        top: galleryItemHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export function showLoader() {
  loader.style.visibility = 'visible';
}

export function showBottomLoader() {
  bottomLoader.style.visibility = 'visible';
}

export function hideLoader() {
  loader.style.visibility = 'hidden';
  bottomLoader.style.visibility = 'hidden';
}

export function hideLoadBtn() {
  loadBtn.style.visibility = 'hidden';
}

export function showLoadBtn() {
  loadBtn.style.visibility = 'visible';
}
