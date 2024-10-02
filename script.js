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

