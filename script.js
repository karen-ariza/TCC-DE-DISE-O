// ==== SCRIPT PARA EL MENÚ HAMBURGUESA ====

// Seleccionamos el ícono del menú y el contenedor del menú de navegación
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

// Cuando el usuario hace clic en el ícono (☰), se alterna la clase "active"
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});