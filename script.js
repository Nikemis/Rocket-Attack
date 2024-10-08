// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu-desktop').classList.toggle('active');
});

document.querySelectorAll('.menu-desktop ul li a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.menu-desktop').classList.remove('active'); // Fecha o menu ao selecionar
    });
});

// Seleciona o botão de menu e o menu desktop
const menuToggle = document.querySelector('.menu-toggle');
const menuDesktop = document.querySelector('.menu-desktop');
const menuClose = document.querySelector('.menu-close');

// Evento para abrir o menu
menuToggle.addEventListener('click', () => {
    menuDesktop.classList.add('active');
});

// Evento para fechar o menu
menuClose.addEventListener('click', () => {
    menuDesktop.classList.remove('active');
});

// Opcional: adicionar um evento de clique fora do menu para fechá-lo
document.addEventListener('click', (event) => {
    if (!menuDesktop.contains(event.target) && !menuToggle.contains(event.target)) {
        menuDesktop.classList.remove('active');
    }
});
