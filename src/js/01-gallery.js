// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

function makeImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
      </li>`;
    })
    .join('');
}

const gallery = document.querySelector('.gallery');
const images = makeImageGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', images);
// console.log(makeImageGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
