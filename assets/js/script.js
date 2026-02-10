const modeIcon = document.getElementById('mode_icon');
const loginForm = document.getElementById('login_form');
const container = document.getElementById('container');

modeIcon.addEventListener('click', () => {

    loginForm.classList.toggle('dark');
    container.classList.toggle('dark');

    if (loginForm.classList.contains('dark')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
});