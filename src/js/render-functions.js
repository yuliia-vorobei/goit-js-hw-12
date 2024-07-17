export function getGallery(images) {
  return images.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
        <div class="gallery-item">
             <a href="${largeImageURL}" class="gallery-link">
              <img class="img" src="${webformatURL}" alt="${tags}" />
            </a>
            <div class="gallery-text-container">
            <p class="gallery-text"><b>Likes </b>${likes}</p>
            <p class="gallery-text"><b>Views </b>${views}</p>
            <p class="gallery-text"><b>Comments </b>${comments}</p>
            <p class="gallery-text"><b>Downloads </b>${downloads}</p>
            </div>
      </div>
      
      `
    )
    .join('');
}
