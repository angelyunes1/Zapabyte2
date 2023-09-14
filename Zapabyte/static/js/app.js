// let mostrador = document.getElementById("mostrador");
// let items = document.querySelectorAll(".item");
// let seleccion = document.getElementById("seleccion");
// let imgSeleccionada = document.getElementById("img");
// let modeloSeleccionado = document.getElementById("modelo");
// let descripSeleccionada = document.getElementById("descripcion");
// let precioSeleccionado = document.getElementById("precio");
// // Agregar evento de clic al botón de cierre
// const sizeSelect = document.getElementById("size-select");
// const cerrarBoton = document.querySelector('.cerrar');

// const addToCartBtn = document.querySelector('#add-to-cart');


// let cartItems = [];


// addEventListeners();

// function addEventListeners() {
//   items.forEach( item => {
//     item.addEventListener('click', showProduct);
//   });

//   cerrarBoton.addEventListener('click', cerrar);

//   addToCartBtn.addEventListener('click', );
// };


// function showProduct(event) {
//   const item = event.target.closest('.item');

//   quitarBordes();
//   mostrador.style.width = "60%";  
//   seleccion.style.width = "40%";
//   seleccion.style.opacity = "1";
//   item.style.border = "2px solid rgb(128, 128, 128)";

//   imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

//   modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

//   // descripSeleccionada.innerHTML = "Descripción del modelo ";

//   precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;

//   addToCartBtn.dataset.id = item.dataset.id;

//   // const cartItem = {
//   //     img: imgSeleccionada.src,
//   //     modelo: modeloSeleccionado.innerText,
//   //     precio: precioSeleccionado.innerText
//   // };

// }


// function quitarBordes() {
//   const items = document.getElementsByClassName("item");
//   for (let i = 0; i < items.length; i++) {
//       items[i].style.border = "none";
//   }
// }

// function cerrar() {
//   mostrador.style.width = "100%";
//   seleccion.style.width = "0%";
//   seleccion.style.opacity = "0";
//   quitarBordes();
// }


// function addItemToCart(item) {
//   console.log({ item });
// }

const mostrador = document.getElementById("mostrador");
const items = document.querySelectorAll(".item");
const seleccion = document.getElementById("seleccion");
const imgSeleccionada = document.getElementById("img");
const modeloSeleccionado = document.getElementById("modelo");
const precioSeleccionado = document.getElementById("precio");
const cerrarBoton = document.querySelector('.cerrar');
const addToCartBtn = document.querySelector('#add-to-cart');

// Agregar event listeners al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  addEventListeners();
});

function addEventListeners() {
  items.forEach(item => {
    item.addEventListener('click', showProduct);
  });

  cerrarBoton.addEventListener('click', cerrar);
  addToCartBtn.addEventListener('click', addToCart);
}

function showProduct(event) {
  const item = event.target.closest('.item');

  quitarBordes();
  mostrador.style.width = "60%";
  seleccion.style.width = "40%";
  seleccion.style.opacity = "1";
  item.style.border = "2px solid rgb(128, 128, 128)";

  imgSeleccionada.src = item.querySelector("img").src;
  modeloSeleccionado.innerHTML = item.querySelector("p").innerHTML;
  precioSeleccionado.innerHTML = item.querySelector("span").innerHTML;
}

function quitarBordes() {
  items.forEach(item => {
    item.style.border = "none";
  });
}

function cerrar() {
  mostrador.style.width = "100%";
  seleccion.style.width = "0%";
  seleccion.style.opacity = "0";
  quitarBordes();
}

function addToCart() {
  // Obtener los detalles del artículo seleccionado
  const itemName = modeloSeleccionado.innerHTML;
  const itemPrice = parseFloat(precioSeleccionado.innerHTML.replace('$', ''));

  // Crear un objeto de artículo
  const item = {
    name: itemName,
    price: itemPrice,
  };

  // Agregar el artículo al carrito
  cart.push(item);

  // Actualizar la vista del carrito
  showCart();
}

// Función para mostrar el carrito
function showCart() {
  // Limpia el contenido actual del carrito
  cartContainer.innerHTML = '';

  // Calcula el precio total
  let totalPrice = 0;

  // Itera sobre los elementos del carrito y crea elementos HTML para cada artículo
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <div>${item.name}</div>
      <div>$${item.price.toFixed(2)}</div>
    `;

    // Agrega el artículo al carrito en el DOM
    cartContainer.appendChild(cartItem);

    // Suma el precio del artículo al precio total
    totalPrice += item.price;
  });

  // Actualiza el precio total en el DOM
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// CODIGO CARRITO FUNCIONAL


// // Declaración de variables globales para el carrito y los elementos del DOM
// const cart = [];
// const cartContainer = document.getElementById('cart-container');
// const totalPriceElement = document.getElementById('total-price');

// // Función para mostrar el carrito
// export const showCart = () => {
//   // Limpia el contenido actual del carrito
//   cartContainer.innerHTML = '';

//   // Calcula el precio total
//   let totalPrice = 0;

//   // Itera sobre los elementos del carrito y crea elementos HTML para cada artículo
//   cart.forEach(item => {
//     const cartItem = document.createElement('div');
//     cartItem.classList.add('cart-item');
//     cartItem.innerHTML = 
//       <div>${item.name}</div>
//       <div>$${item.price}</div>
//       <button class="remove-item-button" data-id="${item.id}">Eliminar</button>
//     ;

//     // Agrega el artículo al carrito en el DOM
//     cartContainer.appendChild(cartItem);

//     // Suma el precio del artículo al precio total
//     totalPrice += item.price;
//   });

//   // Actualiza el precio total en el DOM
//   totalPriceElement.textContent = $${totalPrice.toFixed(2)};
// };
// // Función para agregar event listeners a los elementos relevantes en tu página
// function addListeners() {
//   const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
//   const removeItemButtons = document.querySelectorAll('.remove-item-button');
//   const removeAllItemsButton = document.getElementById('remove-all-items-button');

//   addToCartButtons.forEach(button => {
//     button.addEventListener('click', addItemToCart);
//   });

//   removeItemButtons.forEach(button => {
//     button.addEventListener('click', removeItemToCart);
//   });

//   removeAllItemsButton.addEventListener('click', removeAllItemsToCart);
// }

// // Función para ocultar el carrito
// function hideCart() {
//   cartContainer.style.display = 'none';
// }

// // Función para agregar un artículo al carrito
// function addItemToCart(event) {
//   const button = event.target;
//   const itemId = button.getAttribute('data-id');
//   // Aquí deberías tener un mecanismo para obtener los detalles del artículo
//   const item = {
//     id: itemId,
//     name: 'Nombre del artículo',
//     price: 25.99, // Precio del artículo
//   };

//   cart.push(item);
//   showCart();
// }

// // Función para eliminar un artículo del carrito
// function removeItemToCart(event) {
//   const button = event.target;
//   const itemId = button.getAttribute('data-id');
//   const itemIndex = cart.findIndex(item => item.id === itemId);

//   if (itemIndex !== -1) {
//     cart.splice(itemIndex, 1);
//     showCart();
//   }
// }

// // Función para eliminar todos los artículos del carrito
// function removeAllItemsToCart() {
//   cart.length = 0;
//   showCart();
// }

// // Agregar event listeners cuando la página se carga
// window.addEventListener('load', () => {
//   addListeners();
// });



