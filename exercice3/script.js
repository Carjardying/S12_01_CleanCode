/* EXERCICE 3 
CONSIGNES : 
 - Fais du refactoring sur la partie Javascript, il faudra à minima:

    - Redécouper la fonction gallery

    - Gérer les erreurs si l'API est inaccessible */


const allPhotosUrl = "https://jsonplaceholder.typicode.com/photos";
const gallery = document.getElementById("gallery");


/***** FONCTION PRINCIPALE : APPELLE L'API *****/
async function getData(url) {
  try {
    const response = await fetch(url);
    const photos = await response.json();

    separateAllPhotos(photos);

  } catch (error) {
    console.error("Failed to catch data : ", error);
  }
}

getData(allPhotosUrl);

/**** FONCTION QUI SEPARE LES ELEMENTS DU JSON OBTENU PPOUR FAIRE LE FOREACH ****/
function separateAllPhotos(photos) {
    photos.slice(0, 50).forEach((element) => {
        createElements(element);
    });
}

/**** FONCTION QUI APPELLE LES TROIS FONCTION DE CREATION D'ELEMENTS ****/
function createElements(element) {
  const photoDiv = createDiv();
  const img = createImg(element);
  const title = createTitle(element);
  photoDiv.appendChild(img);
  photoDiv.appendChild(title);
  gallery.appendChild(photoDiv);
}

/**** FONCTIONS CREATION D'ELEMENTS ****/
function createDiv() {
  const photoDiv = document.createElement("div");
  photoDiv.className = "photo";
  return photoDiv;
}

function createImg(element) {
  const img = document.createElement("img");
  img.src = element.thumbnailUrl;
  img.alt = element.title;
  return img;
}

function createTitle(element) {
  const title = document.createElement("div");
  title.className = "photo-title";
  title.textContent = element.title;
  return title;
}



