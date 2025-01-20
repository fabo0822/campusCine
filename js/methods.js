// Función para crear tarjetas dinámicamente
export function cardCreate(films, container) {

  
// Iterar sobre cada objeto de película en el array de películas
  films.forEach(film => {

   // Desestructurar el objeto película para obtener las propiedades título, imagen y synposis
    const {title, image, synopsis} = film

    // Crear un nuevo elemento div y asignarle la clase "card"
    const card = document.createElement("div");
    card.classList.add("card");

   // El título, la imagen y la descripción se insertan en los elementos HTML correspondientes
    card.innerHTML = /*html*/ `
    <div class="title__container">
      <h2 class = "title__card">${title}</h2>
    </div>
    
    <div class="image__container">
      <img class= "img__card" src="./img/${image}" alt="${title}">
    </div>
    <div class="description__container">
      <p class = "description__card">${synopsis}</p>
    </div>
    <div class = "button__container">
      <button class="button__card" data-name="${title}">Ver mas</button>
    </div>
    `;

   // Añadir el elemento de tarjeta recién creado al contenedor especificado
    container.appendChild(card);
  });
};


// Función para buscar una película y mostrar los resultados
export function searchFilm(films, query) {
  return new Promise((resolve, reject) => {
    if (query === '') {
      // Si el buscador está vacío, devuelve todas las películas por defecto
      resolve(films);
      return;}
   
   
    if (!query) {
      reject('Ingresa la película a buscar');
      return;
    }

    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredFilms.length === 0) {
      reject(`La pelicula "${query}" no existe en la base de datos`);
      return;
    }

    resolve(filteredFilms);
  });
}


export function popupCreate(film, container) {
  const [{title, image, synopsis, description, length, genre, cast, dateLaunch}] = film;

  // Crear el contenedor del popup
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Contenido del popup
  popup.innerHTML = /*html*/ `
  <div class="popup__title">
    <h2 class="popup__element--title">${title}</h2>
  </div>
  <div class="popup__image">
    <img src="./img/${image}" alt="${title}" class = "popup__element--image">
  </div>
  <div class="popup__description">
    <p class = "popup__element--description">${synopsis}</p>
  </div>
  <div class="popup__info--right">
    <p class = "popup__element--duration"><span class="bold">Duración:</span> ${length}</p>
    <p class = "popup__element--genre"><span class="bold">Género:</span> ${genre}</p>
    <p class = "popup__element--datelaunch"><span class="bold">Fecha De Lanzamiento:</span> ${dateLaunch}</p>
    <p class = "popup__element--description"><span class="bold">descripcion:</span>${description}</p>
  </div>
  <div class="popup__info--left">
    <p class = "popup__element--cast"><span class="bold">Cast:</span> ${cast}</p>
  </div>
  `;

  // Crear el fondo del popup que cubre el resto de la página
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  // Añadir el popup al contenedor del overlay
  overlay.appendChild(popup);

  // Agregar el overlay con el popup al contenedor principal
  container.appendChild(overlay);

  // Cerrar el popup cuando el usuario haga clic fuera de él
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
}


export function getPopUpInfo (films, query){
  return new Promise((resolve, reject) => {
   
// Filtrar el array de películas para encontrar coincidencias con la consulta
    const filter = films.filter((film) =>
      film.title.includes(query)
    );

    if (filter.length === 0){
      reject(`No se pudo encontrar la informacion de la película ${query}`);
      return;
    }

    resolve(filter);
  });
}