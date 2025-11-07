// Activar íconos de Lucide
lucide.createIcons();

// Seleccionar elementos
const toggle = document.querySelector('.nav-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const icon = toggle.querySelector('i');

// Evento de clic para abrir/cerrar menú
toggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  toggle.classList.toggle('rotate');

  // Cambiar ícono de "menu" a "x"
  const isOpen = navMenu.classList.contains('active');
  icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
  lucide.createIcons(); // actualizar el ícono
});