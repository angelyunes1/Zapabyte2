let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");
const addToCartButton = document.getElementById("add-to-cart");

function cargar(item) {
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid rgb(128, 128, 128)";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;

    addToCartButton.dataset.id = item.id;


    const cartItem = {
        img: imgSeleccionada.src,
        modelo: modeloSeleccionado.innerText,
        precio: precioSeleccionado.innerText
    };

    console.log({ cartItem });

}

function cerrar() {
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}

function quitarBordes() {
    var items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
        items[i].style.border = "none";
    }
}

getCart();

// document.addEventListener("DOMContentLoaded", function()

function addListeners() {



}

function showCart() {}

function hideCart() {}

function addItemToCart() {}

function removeItemToCart() {}

function removeAllItemsToCart() {}






// // Variables
// const carrito = document.querySelector('#carrito');
// const contenedorCarrito = document.querySelector('#lista-carrito tbody');
// const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
// const listaCursos = document.querySelector('#lista-cursos');
// let articulosCarrito = [];

// cargarEventListeners();
// function cargarEventListeners() {
//     // Cuando agregas un curso presionando "Agregar"
//     listaCursos.addEventListener('click', agregarCurso);

//     // Elimina cursos del carrito
//     carrito.addEventListener('click', eliminarCurso);

//     // Muestra los cursos de Local Storage
//     document.addEventListener('DOMContentLoaded', () => {
//         articulosCarrito = JSON.parse( localStorage.getItem('carrito') )  ||  [];

//         carritoHTML();
//     });

//     // Vaciar el carrito
//     vaciarCarritoBtn.addEventListener('click', () => {
//         articulosCarrito = []; // Reseteamos el arreglo

//         limpiarHTML(); // eliminamos todo el HTML
//     });
// }


// // Funciones 
// function agregarCurso(e) {
//     e.preventDefault();

//     if( e.target.classList.contains('agregar-carrito') ) {
//         const cursoSeleccionado = e.target.parentElement.parentElement;

//         leerDatosCurso(cursoSeleccionado);
//     }
// }

// // Elimina un curso del carrito
// function eliminarCurso(e) {
//     // console.log(e.target.classList);

//     if( e.target.classList.contains('borrar-curso') ) {
//         const cursoId = e.target.getAttribute('data-id');

//         // Elimina del arreglo de articulosCarrito por el data-id
//         articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );

//         carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
//     }
// }

// // Lee el contenido del HTML al que le dimos click y extrae la información del curso
// function leerDatosCurso(curso) {
//     // console.log(curso);

//     // Crear un objeto con el contenido del curso actual
//     const infoCurso = {
//         imagen: curso.querySelector('img').src,
//         titulo: curso.querySelector('h4').textContent,
//         precio: curso.querySelector('.precio span').textContent,
//         id: curso.querySelector('a').getAttribute('data-id'),
//         cantidad: 1
//     }

//     // Revisa si un elemento ya existe en el carrito
//     const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );

//     if(existe) {
//         // Actualizamos la cantidad
//         const cursos = articulosCarrito.map( curso => {

//             if( curso.id === infoCurso.id ) {
//                 curso.cantidad ++;
//                 return curso; // retorna el objeto actualizado

//             } else {
//                 return curso; // retorna los objetos no duplicados
//             }
//         });

//         articulosCarrito = [...cursos];

//     } else {
//         // Agrega elementos al arreglo de carrito
//         articulosCarrito = [...articulosCarrito, infoCurso];
//     }

//     console.log(articulosCarrito);

//     carritoHTML();
// }


// // Muestra el carrito de compras en el HTML
// function carritoHTML() {
//     // Limpiar el HTML
//     limpiarHTML();

//     // Recorre el carrito y genera el HTML
//     articulosCarrito.forEach( curso => {
//         const { imagen, titulo, precio, cantidad, id } = curso;

//         const row = document.createElement('tr');

//         row.innerHTML = `
//             <td>
//                 <img src='${imagen}' width='100'>
//             </td>
//             <td>
//                 ${titulo}
//             </td>
//             <td>
//                 ${precio}
//             </td>
//             <td>
//                 ${cantidad}
//             </td>
//             <td>
//                 <a href='#' class='borrar-curso' data-id='${id}'> X </a>
//             </td>
//         `;

//         // Agrega el HTML del carrito en el tbody
//         contenedorCarrito.appendChild(row);
//     });

//     // Agregar el carrito de compras a localStorage
//     sincronizarStorage();
// }

// function sincronizarStorage() {
//     localStorage.setItem( 'carrito', JSON.stringify(articulosCarrito) );
// }

// // Elimina los cursos del tbody
// function limpiarHTML() {
//     // Forma lenta
//     // contenedorCarrito.innerHTML = '';

//     while(contenedorCarrito.firstChild) {
//         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
//     }
// }