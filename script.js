const toggleMenu = document.querySelector('.toggleMenu');
const navigation = document.querySelector('.navigation');

toggleMenu.addEventListener('click', () => {
   toggleMenu.classList.toggle('active');
   navigation.classList.toggle('active');
});
