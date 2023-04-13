console.log('Hello!');

// Obtener el elemento HTML
let parrafo = document.getElementById("parrafo");

// Definir una variable para la suma
let suma = 0;

// Agregar un evento para cuando se haga clic en el elemento
parrafo.addEventListener("click", function() {
  // Sumar 1 a la variable
  suma += 1;
  // Actualizar el contenido del elemento con el valor actualizado de la suma
  parrafo.textContent = "Haz clic para sumar: " + suma;
});

// Agregar un evento para cuando el mouse pase por encima del elemento
parrafo.addEventListener("mouseover", function() {
  // Sumar 10 a la variable
  suma += 10;
  // Actualizar el contenido del elemento con el valor actualizado de la suma
  parrafo.textContent = "Haz clic para sumar: " + suma;
});
