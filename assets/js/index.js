//*******importacion de los todos los elementos del arreglo con las viviendas*******
import { apartmentJSON } from "./dataApartments.js";
//*******captura del elemento para la insercion de las distintas cards*******
const containerCards = document.getElementById("container");
// *******card tipo a insertar en html con los parametros deseados por el usuario*******
const renderCardApartmen = (img, name, rooms, dimension, description) => {
  return ` <div class="propiedad">
    <div class="img" style="background-image: url('${img}')"></div>
    <section>
      <h5>${name}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${rooms}</p>
        <p>Metros: ${dimension}</p>
      </div>
      <p class="my-3">${description}</p>
      <button class="btn btn-info ">Ver más</button>
    </section>
  </div>`;
};
//*******renderizado de todos las viviendas al iniciar el html*******
function renderAllApartment() {
  apartmentJSON.map((apartment) => {
    containerCards.innerHTML += renderCardApartmen(
      apartment.src,
      apartment.name,
      apartment.rooms,
      apartment.m,
      apartment.description
    );
  });
}
renderAllApartment();
//*******aplicando el filtro segun los parametros del usuario*******
const button = document.getElementById("filtre");
button.addEventListener("click", () =>{
  //*******captura de valores ingresados por el usuario para ser utilizados en el filtro de propiedades*******
  let rooms = document.getElementById("rooms").value;
  let minDimension = document.getElementById("minDimension").value;
  let maxDimension = document.getElementById("maxDimension").value;
// *******validacion de que todos los parametros de busqueda hayan sido ingresados*******
  if (isEmpty(rooms) || isEmpty(minDimension) || isEmpty(maxDimension)) {
    alert("todos los campos son obligatorios");
    return;
  }
  //*******limpiado de contenedor de cards para insertar los nuevos elementos*******
  cleanContainer();
  //*******nuevo arreglo con elementos filtrados*******
  let filtreApartments = apartmentJSON.filter(
    (apartmentJSON) =>
      apartmentJSON.rooms == rooms &&
      apartmentJSON.m >= minDimension &&
      apartmentJSON.m <= maxDimension
  );
  //*******insertar elementos filtrados con los parametros del usuario*******
  filtreApartments.map((apartment) => {
    containerCards.innerHTML += renderCardApartmen(
      apartment.src,
      apartment.name,
      apartment.rooms,
      apartment.m,
      apartment.description
    );
  });

  //*******añadiendo el total de propiedades obtenida con los parametros filtrados*******
  let totalText = document.getElementById("totalText");
  totalText.innerHTML = `<h4 id="totalText" class="py-3">Total: <span id="total">${filtreApartments.length}</span></h4>`;
});
//*******funcion que verifica si el dato ingresado por el usuario esta vacio*******
function isEmpty(value) {
  return value.length === 0;
}
//*******funcion que elimina los elementos dentro del contenedor para mostrar los nuevos elementos filtrados*******
function cleanContainer() {
  containerCards.innerHTML = "";
}
