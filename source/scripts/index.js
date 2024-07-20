/* в этот файл добавляет скрипты*/

const burgerEl = document.querySelector('.burger');
const navListEl = document.querySelector('.nav-list');

burgerEl.addEventListener('click', () => {
  burgerEl.classList.toggle('is-opened');
  navListEl.classList.toggle('is-opened');
});
