// Inicializar el índice de diapositivas en 1
// Esto asegura que comenzamos mostrando la primera diapositiva
let slideIndex = 1;

// Función principal que maneja la lógica del carrusel
function showSlides() {
    let i;
    // Obtener todas las diapositivas del documento
    
    // Ocultar todas las diapositivas
    for (i = 0; i < (document.getElementsByClassName"mySlides").length; i++) {
        (document.getElementsByClassName"mySlides")[i].style.display = "none";
    }
    
    // Incrementar el índice para la siguiente diapositiva
    slideIndex++;
    
    // Si el índice supera el número total de diapositivas, volver al principio
    if (slideIndex > (document.getElementsByClassName"mySlides").length) {
        slideIndex = 1;
    }
    
    // Mostrar la diapositiva actual
    // Se usa slideIndex - 1 porque los arrays comienzan en 0
    (document.getElementsByClassName"mySlides")[slideIndex - 1].style.display = "block";
    
    // Programar la siguiente transición después de 3 segundos (3000 ms)
    setTimeout(showSlides, 3000);
}

// Iniciar el carrusel llamando a la función showSlides
showSlides();
mySlides {<img class="img-1" src=".jpg" alt=""></img>
 <img class="img-2" src=".jpg"alt=""></img>
    display: none;
    position: absolute;
    
   
width: 100%;
    

   
transition: opacity 1s ease-in-out;
    
   
opacity: 0;
}

.mySlides.active {
    
   
display: block;
    opacity: 1;
}

}
``