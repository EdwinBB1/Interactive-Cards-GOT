// Selección de elementos del modal
const modal = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalHouse = document.getElementById('modal-house');
const modalQuote = document.getElementById('modal-quote');
const closeBtn = document.getElementById('close-btn');

// Clic para cerrar
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Clic fuera del modal para cerrar
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// Agrega listeners a cada tarjeta
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const name = card.querySelector('h3').textContent;
    const house = card.querySelectorAll('p')[0].textContent;
    const quote = card.querySelectorAll('p')[1].textContent;

    modalName.textContent = name;
    modalHouse.textContent = house;
    modalQuote.textContent = quote;

    modal.classList.remove('hidden');
  });
});

const toggleBtn = document.getElementById('toggle-theme');

// Cargar preferencia al iniciar
if (localStorage.getItem('tema') === 'claro') {
  document.body.classList.add('light-theme');
  toggleBtn.textContent = '🌑 Modo Oscuro';
}

// Evento para cambiar el tema
toggleBtn.addEventListener('click', () => {
  const modoClaro = document.body.classList.toggle('light-theme');

  if (modoClaro) {
    toggleBtn.textContent = '🌑 Modo Oscuro';
    localStorage.setItem('tema', 'claro');
  } else {
    toggleBtn.textContent = '🌙 Modo Claro';
    localStorage.setItem('tema', 'oscuro');
  }
});
