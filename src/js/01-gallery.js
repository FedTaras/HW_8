console.log(galleryItems);

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
galleryList.style.listStyle = 'none';

const markup = galleryItems
  .map(
    ({ preview, description, original }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img 
          class="gallery__image"
          src="${preview}"
          alt="${description}"/>
      </a>
    </li>`
  )
  .join('');

galleryList.insertAdjacentHTML('afterbegin', markup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.on('show.simplelightbox');
