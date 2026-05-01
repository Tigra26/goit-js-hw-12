import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  galleryList: document.querySelector('.js-gallery-list'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more-btn')
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  const galleryCardsTemplate = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
              <div class="gallery-info">
                <p class="gallery-info-item">
                  <b>Likes</b>
                  <span>${likes}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Views</b>
                  <span>${views}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Comments</b>
                  <span>${comments}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Downloads</b>
                  <span>${downloads}</span>
                </p>
              </div>
            </a>
          </li>
        `;
      }
    )
    .join('');
 
  refs.galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);

  lightbox.refresh();
};

export const clearGallery = () => {
  refs.galleryList.innerHTML = '';
};

export const showLoader = () => {
  refs.loader.classList.add('is-active');
};

export const hideLoader = () => {
  refs.loader.classList.remove('is-active');
};

export const showLoadMoreButton = () => {
  refs.loadMoreBtn.classList.remove('is-hidden');
}

export const hideLoadMoreButton = () => {
  refs.loadMoreBtn.classList.add('is-hidden');
}