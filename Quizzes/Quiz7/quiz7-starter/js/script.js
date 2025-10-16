'use strict';

// grabbing gallery class element
const gallery = document.querySelector('.gallery');

// adding event listener to respond to click events
gallery.addEventListener('click', function(event) {
  // checking if the clicked element is an image
  if (event.target.tagName === 'IMG') {
    // grab the img element inside the figure element
    const previewImg = document.querySelector('.preview-img');
    // set the src and alt attributes to those of the event target
    previewImg.src = event.target.src;
    previewImg.alt = event.target.alt;

    // grab the figcaption element inside the figure element
    const figcaption = document.querySelector('figcaption');
    // set the text content to the alt attribute of the img element inside the figure element
    figcaption.textContent = previewImg.alt;
  }

});

    




