import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const refs = {
  searchForm: document.querySelector('.js-submit-form'),
  galleryList: document.querySelector('.js-gallery-list'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

let page = 1;
let totalPages = 0;
const perPage = 15;
let searchQuery = '';
let galleryCardHeight = 0;

const onLoadMoreBtnClick = async () => {
  try {
    page++;

    hideLoadMoreButton();
    showLoader();

    const data = await getImagesByQuery(searchQuery, page);

    createGallery(data.hits);

    scrollBy({
      top: galleryCardHeight * 2,
      behavior: 'smooth',
    });

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        color: '#00FFFF',
        maxWidth: '432px',
        messageColor: '#000000',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      color: '#EF4040',
      maxWidth: '432px',
      messageColor: '#ffffff',
    });
  } finally {
    hideLoader();
  }
};

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    searchQuery = event.target.elements['search-text'].value.trim();

    clearGallery();
    hideLoadMoreButton();
    page = 1;

    if (!searchQuery) {
      iziToast.warning({
        message: 'You forgot to type what you are looking for!',
        position: 'topRight',
        color: '#FFCE1B',
        maxWidth: '432px',
        messageColor: '#ffffff',
      });

      return;
    }

    showLoader();

    const data = await getImagesByQuery(searchQuery, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: '#EF4040',
        maxWidth: '432px',
        messageColor: '#ffffff',
      });

      return;
    }

    createGallery(data.hits);

    totalPages = Math.ceil(data.totalHits / perPage);

    galleryCardHeight =
      refs.galleryList.children[0].getBoundingClientRect().height;

    if (page < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    hideLoader();
    refs.searchForm.reset();
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
