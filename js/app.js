//imports
import { typesFood } from "./data/filter-app.js";
import { options } from "./data/filter-options-app.js"

//variables 
const optionForSelectDom = document.querySelector('#filter-food');
const viewInfoFoodDom = document.querySelector('#columns-items');
const containerCartShop = document.querySelector('#lista-carrito tbody');
const deleteProductCart = document.querySelector('#vaciar-carrito');
const cartShop = document.querySelector('#carrito');
const listFood = document.querySelector('#lista-comida');
let cartObjectFood = [];


//addEventListener que se ejutara cada vez que se recarge el documento 
document.addEventListener('DOMContentLoaded', function() {
    console.log('documento cargado correctamente'); 
});

//funciones
eventListeners();
function eventListeners(){
    listFood.addEventListener('click', addFood);
}

function addFood(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
      const foodSelected = e.target.parentElement.parentElement;
      infoFood(foodSelected);    
    }
}


//contiene la informacion comida seleccionada 
function infoFood(food){
    const infoFoodSelected = {
        img: food.querySelector('img').src,
        title: food.querySelector('h4').textContent,
        price: food.querySelector('h6').textContent,
        id: food.querySelector('a').getAttribute('id'),
        quantity: 1
    }
  //añade elemento al carrido
  cartObjectFood = [...cartObjectFood, infoFoodSelected];
  cartHtml();
}


//muestra los items en el carrito seleccionado
function cartHtml(){
  //limpiamos html previo
  deleteFoodSelected();

  
  //foreach que recorre cada que seleccionamos
    cartObjectFood.forEach( food => {
        const { img, title, price, id, quantity} = food;
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>
            <img src="${img}" width="100" alt="imageFood ${title}">
          </td>
          <td>${title}</td>
          <td>${price}</td>
          <td class="text-center font-bold">${quantity}</td>
          <td>
              <a href="#" class="borrar-comida" data-id="${id}">x</a>
          </td>
        
        `;
        containerCartShop.appendChild(row);
    });
}

//delete comida seleccionada html
function deleteFoodSelected(){
    while(containerCartShop.firstChild){
        containerCartShop.removeChild(containerCartShop.firstChild);
    }
}

//metodos
typesFood.forEach(element => {
    const {id, name, img, type, descripcion, estrellas, precio} = element;
    
    
    const foodContainerView = document.createElement('div');
    foodContainerView.classList.add('w-5/6', 'w-full');
    const divContainer = document.createElement('div');
    divContainer.classList.add('p-2', 'my-3', 'bg-white', 'rounded-lg', 'shadow-lg');
    
    /* */
    const imgFood = document.createElement('img');
          imgFood.classList.add('u-full-width');
          imgFood.src = img;
          imgFood.alt = `${element.name} imagen`;
    
    /* elemento div con la informacion de la comid */
    const divInfoFood = document.createElement('div');
          divInfoFood.classList.add('info-card');
    
    /* elemento que muestra el nombre del producto */
    const foodName = document.createElement('h4');
          foodName.textContent = name;
          foodName.classList.add('font-bold');

    /* elemento que muestra el precio dentro de la card*/      
    const fooodPrice = document.createElement('h6');
          fooodPrice.classList.add('text-md', 'my-3');
          fooodPrice.textContent = '$'+precio;
    
    /* boton de la card de los productos*/
    const addCartProduct = document.createElement('a');
          addCartProduct.classList.add('u-full-width', 'bg-blue-400', 'cursor-pointer', 'rounded-lg', 'p-3', 'mt-4', 'font-bold' ,'hover:text-white', 'agregar-carrito', 'hover:bg-blue-500', 'text-white');
          addCartProduct.textContent = 'Agregar al carrito';
          addCartProduct.id = id;
  

    const foodDescription = document.createElement('p');
          foodDescription.textContent = descripcion;
          foodDescription.classList.add('text-sm', 'font-bold');
          

          /* div whith info array */
          divInfoFood.appendChild(imgFood);
          divInfoFood.appendChild(foodName);
          divInfoFood.appendChild(foodDescription);
          divInfoFood.appendChild(fooodPrice);
          divInfoFood.appendChild(addCartProduct);


          /* info show html */
          divContainer.appendChild(divInfoFood);
          foodContainerView.appendChild(divContainer);
          viewInfoFoodDom.appendChild(foodContainerView);
});

//foreach que recorre las opciones para filtar la comida

options.forEach(op => {
    const { option, type} = op;
    const optionContainer = document.createElement('option');
          optionContainer.classList.add('text-center');
          optionContainer.value = option;
          optionContainer.textContent = type
    optionForSelectDom.appendChild(optionContainer);
});

