//imports
import { typesFood } from "./data/filter-app.js";

//variables 
const filterFoods = document.querySelector('#columns-items');

//helpers
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

//metodos 
document.addEventListener('DOMContentLoaded', function() {
    console.log('documento cargado correctamente'); 
});

//funciones

typesFood.forEach(element => {
    const {id, name, img, type, descripcion, estrellas, precio} = element;
    
    
    const foodContainerView = document.createElement('div');
    foodContainerView.classList.add('w-5/6', 'w-full');
    const divContainer = document.createElement('div');
    divContainer.classList.add('p-2', 'my-3', 'bg-white', 'rounded-lg', 'shadow-lg');
    
    /* */
    const imgFood = document.createElement('img');
          imgFood.classList.add('u-full-width');
          imgFood.src = element.img;
          imgFood.alt = `${name} imagen`;
    
    /* second div whith information food */
    const divInfoFood = document.createElement('div');
          divInfoFood.classList.add('info-card');
    
    /* */
    const foodName = document.createElement('h4');
          foodName.textContent = element.name;
          foodName.classList.add('font-bold');

    /* */      
    const fooodPrice = document.createElement('p');
          fooodPrice.textContent = '$'+element.precio;
          fooodPrice.classList.add('text-md');
    
    /* boton de la card de los productos*/
    const addCartProduct = document.createElement('a');
          addCartProduct.classList.add('u-full-width', 'bg-blue-400', 'cursor-pointer', 'rounded-lg', 'p-3', 'mt-4', 'font-bold' ,'hover:text-white', 'agregar-carrito', 'hover:bg-blue-500', 'text-white');
          addCartProduct.textContent = 'Agregar al carrito';
          //addCartProduct.dataset.element.id;

    const foodDescription = document.createElement('p');
          foodDescription.textContent = element.descripcion;
          foodDescription.classList.add('text-sm', 'font-bold');
          

          /* div whith info array */
          divInfoFood.appendChild(imgFood);
          divInfoFood.appendChild(foodName);
          divInfoFood.appendChild(foodDescription);
          divInfoFood.appendChild(fooodPrice);
          divInfoFood.appendChild(addCartProduct)


          /* info show html */
          divContainer.appendChild(divInfoFood);
          foodContainerView.appendChild(divContainer);
    filterFoods.appendChild(foodContainerView);
});

