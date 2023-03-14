import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const arrOfItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class = "gallery__item">
            <a class = "gallery__link" href = "${original}">
            <img 
                src = "${preview}"
                data-source = "${original}"
                alt = "${description}" 
                class = "gallery__image"
            />
            </a>
        </div>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", arrOfItems);

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const bunnerURL = event.target.dataset.source;

  const modal = basicLightbox.create(`
  <img src="${bunnerURL}">`, {
		onShow: (modal) => {window.addEventListener("keydown", escModal)},
		onClose: (modal) => {window.removeEventListener("keydown", escModal)}
	});

  modal.show();

  function escModal({code}) {
    if (code === "Escape" && modal.visible() === true) {
      modal.close();
    }
  }
});
