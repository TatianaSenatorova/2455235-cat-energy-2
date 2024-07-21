/* в этот файл добавляет скрипты*/

//Открытие и закрытие меню
const burgerEl = document.querySelector('.burger');
const navListEl = document.querySelector('.nav-list');

burgerEl.addEventListener('click', () => {
  burgerEl.classList.toggle('is-opened');
  navListEl.classList.toggle('is-opened');
});

