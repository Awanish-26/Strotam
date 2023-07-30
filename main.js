const icon = document.getElementById('icon');
const side = document.getElementById('side');

icon.addEventListener('click', () => {
    side.classList.toggle('active');
});