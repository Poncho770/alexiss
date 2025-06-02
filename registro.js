const openAuth = document.getElementById('openAuth');
const closeAuth = document.getElementById('closeAuth');
const authModal = document.getElementById('authModal');
const overlay = document.getElementById('overlay');

const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginContent = document.getElementById('loginContent');
const registerContent = document.getElementById('registerContent');

openAuth.addEventListener('click', () => {
    authModal.classList.add('active');
    overlay.classList.add('active');
});

closeAuth.addEventListener('click', () => {
    authModal.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    authModal.classList.remove('active');
    overlay.classList.remove('active');
});

loginTab.addEventListener('click', () => {
    loginContent.classList.remove('hidden');
    registerContent.classList.add('hidden');
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerContent.classList.remove('hidden');
    loginContent.classList.add('hidden');
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
});
