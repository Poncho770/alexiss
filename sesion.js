const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');
const loginModal = document.getElementById('loginModal');
const overlay = document.getElementById('overlay');

openLogin.addEventListener('click', () => {
    loginModal.classList.add('active');
    overlay.classList.add('active');
});

closeLogin.addEventListener('click', () => {
    loginModal.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    loginModal.classList.remove('active');
    overlay.classList.remove('active');
});
