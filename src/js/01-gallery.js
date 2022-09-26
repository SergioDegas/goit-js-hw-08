import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const img = galleryItems
  .map(function (img) {
    const { description: alt, original: modalImg, preview: galleryImg } = img;
    // console.log(alt);
    return `<div class="gallery__item">
  <a class="gallery__link" href="${modalImg}">
    <img
      class="gallery__image"
      src="${galleryImg}"
      data-source="${modalImg}"
      alt="${alt}"
    />
 </a>
</div>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', img);
// console.log(gallery);

let galleryLightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
// console.log(galleryItems);
