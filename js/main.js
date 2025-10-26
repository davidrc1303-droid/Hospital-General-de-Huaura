const seccionCategorias = document.getElementById('categorias');
const botonesCategorias = seccionCategorias.querySelectorAll('.categorias-botones button');
const colores = [
    '#fcefee', 
    '#f0f8ff', 
    '#f0fff0', 
    '#fffff0', 
    '#fae8d4'
];

function cambiarColorCategoria() {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const colorSeleccionado = colores[indiceAleatorio];
    
    seccionCategorias.style.backgroundColor = colorSeleccionado;
    
    botonesCategorias.forEach(boton => {
        boton.style.borderColor = '#adb5bd';
    });
    console.log(`Sección de Categorías cambió a color: ${colorSeleccionado}`);
}

setInterval(cambiarColorCategoria, 5000);


const botonesCarrito = document.querySelectorAll('.btn-carrito');

botonesCarrito.forEach(boton => {
    boton.addEventListener('click', manejarClickCarrito);
});

function manejarClickCarrito(evento) {
    const card = evento.target.closest('.producto-card');
    const nombreProductoElemento = card.querySelector('p');
    let nombreProducto = 'Producto';

    if (nombreProductoElemento) {
        nombreProducto = nombreProductoElemento.textContent.trim().toUpperCase();
    }

    alert(` ${nombreProducto} ha sido añadido al carrito.`);
}


const popupOverlay = document.getElementById('social-popup');
const btnToggleSocial = document.getElementById('fab-social');

function manejarTogglePopup() {
    popupOverlay.classList.toggle('active');
    
    const estado = popupOverlay.classList.contains('active') ? "Abierto" : "Cerrado";
    console.log(`Popup Social: ${estado}`);
}

btnToggleSocial.addEventListener('click', manejarTogglePopup);


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
        popupOverlay.classList.remove('active'); 
        console.log("Popup Social: Cerrado por tecla ESC");
    }
});


function setAnioActual() {
    const elementoAnio = document.getElementById('current-year');
    if (elementoAnio) {
        elementoAnio.textContent = new Date().getFullYear();
        console.log(`Año del Footer establecido a: ${new Date().getFullYear()}`);
    }
}

setAnioActual();