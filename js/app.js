
// Importar el array de películas desde el módulo data.js
import { films } from './data.js';


// Importar la función searchFilm desde el módulo methods.js
import { searchFilm, getPopUpInfo, popupCreate, cardCreate } from './methods.js';


// Importar la función searchFilm desde el módulo methods.js
const container__films = document.getElementById('films');

cardCreate(films, container__films);

const viewMoreButtons = document.querySelectorAll(".button__card"); // Seleccionar todos los botones con la clase "button__card"

viewMoreButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const filmName = button.getAttribute("data-name");

    getPopUpInfo(films, filmName)
      .then((filteredFilm) => {
        popupCreate(filteredFilm, container__films)
      })
      .catch((error) => {
        const errorElement = document.createElement('p');
        errorElement.innerHTML = `<br>${error}`;
        container__films.appendChild(errorElement);
      })
    e.target.blur();
    document.body.focus();
  });
});

// Añadir un evento de clic al botón de búsqueda
document.getElementById('search__button').addEventListener('click', (e) => {

// Seleccionar el elemento contenedor donde se mostrarán las tarjetas de película
  const container__films = document.getElementById('films');

// Obtener la consulta de búsqueda del usuario y convertirla a minúsculas
  const userReq = document.getElementById('search__input').value.toLowerCase();
// Limpiar el elemento contenedor antes de mostrar los nuevos resultados de búsqueda
  container__films.innerHTML = "";

  
// Llamar a la función searchFilm con el array de películas, la consulta de búsqueda del usuario y el elemento contenedor
  searchFilm(films, userReq)
    .then((filteredFilms) => {
      // Llamar a la función para crear tarjetas con las películas encontradas
      cardCreate(filteredFilms, container__films);
      const viewMoreButtons = document.querySelectorAll(".button__card"); // Seleccionar todos los botones con la clase "button__card"

      viewMoreButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const filmName = button.getAttribute("data-name");

          getPopUpInfo(films, filmName)
            .then((filteredFilm) => {
              popupCreate(filteredFilm, container__films)
            })
            .catch((error) => {
              const errorElement = document.createElement('p');
              errorElement.innerHTML = `<br>${error}`;
              container__films.appendChild(errorElement);
            })
          e.target.blur();
          document.body.focus();
        });
      });
    })
    .catch((errorMessage) => {
      // Mostrar el mensaje de error en el contenedor
      const errorElement = document.createElement('p');
      errorElement.innerHTML = `<br>${errorMessage}`;
      container__films.appendChild(errorElement);
    });


})


// Añadir un evento de keydown al campo de entrada de búsqueda
document.getElementById('search__input').addEventListener('keydown', (e) => {
  // Seleccionar el elemento contenedor donde se mostrarán las tarjetas de película
  const container__films = document.getElementById('films');

  
// Verificar si el usuario presionó la tecla Enter
  if (e.key === 'Enter') {

// Obtener la consulta de búsqueda del usuario y convertirla a minúsculas
    const userReq = document.getElementById('search__input').value.toLowerCase();


// Limpiar el elemento contenedor antes de mostrar los nuevos resultados de búsqueda
    container__films.innerHTML = "";

// Llamar a la función searchFilm con el array de películas, la consulta de búsqueda del usuario y el elemento contenedor
    searchFilm(films, userReq)
      .then((filteredFilms) => {
        // Llamar a la función para crear tarjetas con las películas encontradas
        cardCreate(filteredFilms, container__films);
        const viewMoreButtons = document.querySelectorAll(".button__card"); // Seleccionar todos los botones con la clase "button__card"

        viewMoreButtons.forEach((button) => {
          button.addEventListener("click", (e) => {
            const filmName = button.getAttribute("data-name");

            getPopUpInfo(films, filmName)
              .then((filteredFilm) => {
                popupCreate(filteredFilm, container__films)
              })
              .catch((error) => {
                const errorElement = document.createElement('p');
                errorElement.innerHTML = `<br>${error}`;
                container__films.appendChild(errorElement);
              })
            e.target.blur();
            document.body.focus();
          });
        });
      })
      .catch((errorMessage) => {
        // Mostrar el mensaje de error en el contenedor
        const errorElement = document.createElement('p');
        errorElement.innerHTML = `<br>${errorMessage}`;
        container__films.appendChild(errorElement);
      });



// Eliminar el enfoque del campo de entrada para cerrar el teclado móvil
    e.target.blur();
    document.body.focus();

    const viewMoreButtons = document.querySelectorAll(".button__card"); // Seleccionar todos los botones con la clase "button__card"


  }
});

