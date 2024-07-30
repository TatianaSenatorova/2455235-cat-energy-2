/* в этот файл добавляет скрипты*/

//Открытие и закрытие меню
const burgerEl = document.querySelector('.burger');
const navListEl = document.querySelector('.nav-list');

burgerEl.addEventListener('click', () => {
  burgerEl.classList.toggle('is-opened');
  navListEl.classList.toggle('is-opened');
});

//Слайдер

// const sliderDividerEl = document.querySelector('.slider__divider');
// const sliderZoneEl = document.querySelector('.slider');
// // const sliderAfterEl = document.querySelector('.slider__item-after');
// const sliderBeforeEl = document.querySelector('.slider__item-after');

// let mouseEvent = false;

// // Начало события изменения размера половинки слайда
// sliderDividerEl.addEventListener('mousedown', (e) => {
//   e.preventDefault();
//   mouseEvent = true;
//   console.log(mouseEvent);
// });

// // Завершение события изменения размера половинки слайда
// sliderDividerEl.addEventListener('mouseup', (e) => {
//   e.preventDefault();
//   mouseEvent = false;
// });

// // Завершение события изменения размера половинки слайда
// sliderZoneEl.addEventListener('mouseup', () => {
//   mouseEvent = false;
// });

// // Завершение события изменения размера половинки слайда
// sliderZoneEl.addEventListener('mouseleave', () => {
//   mouseEvent = false;
// });

// // Отслеживаем движения мыши в области слайдера
// sliderZoneEl.addEventListener('mousemove', (e) => {
//   console.log(sliderZoneEl.offsetLeft, e.pageX, sliderZoneEl.offsetWidth);
//   const x = e.pageX - sliderZoneEl.offsetLeft;
//   let percent = x * 100 / sliderZoneEl.offsetWidth;
//   console.log(percent);

//   // Ограничения
//   if (percent < 0) {
//     percent = 0;
//   } else if (percent > 100) {
//     percent = 100;
//   }

//   if (mouseEvent) {
//     console.log(percent);
//     sliderDividerEl.style.left = `${percent }%`;
//     sliderBeforeEl.style.width = `${percent }%`;
//   }
// });

