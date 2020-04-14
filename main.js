const wrapper = document.querySelector('.burger-wrapper');
const burger = document.querySelector('.burger-icon');


wrapper.addEventListener('click', () => {
  burger.classList.toggle('active');
});
