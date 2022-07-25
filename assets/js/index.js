const containerCards = document.getElementById("container");
// *******propiedades a mostrar en html dentros de un arreglo*******
const apartmentJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
// *******card tipo a insertar en html con los parametros deseados por el usuario*******
let renderCardApartmen = (img, name, rooms, dimension, description) => {
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
  </div>`
}

function renderAllApartment (){
  apartmentJSON.map(apartment => {
    containerCards.innerHTML += renderCardApartmen(apartment.src, apartment.name, apartment.rooms,apartment.m,apartment.description);
 });
}
//*******aplicando el filtro segun los parametros del usuario*******
function searchApartments(){

//*******captura de valores ingresados por el usuario para ser utilizados en el filtro de propiedades*******
  let rooms = document.getElementById("rooms").value;
  let minDimension = document.getElementById("minDimension").value;
  let maxDimension = document.getElementById("maxDimension").value;

if (isEmpty(rooms)|| isEmpty(minDimension)||isEmpty(maxDimension)){
  alert("todos los campos son obligatorios");
  return
}


//*******nuevo arreglo con elementos filtrados*******
let filtreApartments = apartmentJSON.filter(apartmentJSON => apartmentJSON.rooms== rooms 
                                        && apartmentJSON.m >= minDimension 
                                        && apartmentJSON.m <= maxDimension);

//*******insertar elementos filtrados con los parametros del usuario*******
filtreApartments.map(apartment => {
  containerCards.innerHTML += renderCardApartmen(apartment.src, apartment.name, apartment.rooms,apartment.m,apartment.description);
});



//*******añadiendo el total de propiedades obtenida con los parametros filtrados*******
let totalText = document.getElementById("totalText");
totalText.innerHTML = `<h4 id="totalText" class="py-3">Total: <span id="total">${filtreApartments.length}</span></h4>`;
}

function isEmpty (value){return value.length === 0}