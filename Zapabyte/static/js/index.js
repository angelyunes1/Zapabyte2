const acc = document.querySelectorAll('.acordeon-button');
//Agrandar imagenes

function mostrarVistaPrevia() {
    document.getElementById("vistaPrevia").style.display = "block";
}

function cerrarVistaPrevia() {
    document.getElementById("vistaPrevia").style.display = "none";
}

acc.forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }

        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.height) {
            content.style.height = null;
            content.style.padding = '0px';
        } else {
            const padding = 20;
            content.style.height =
                content.scrollHeight + padding * 2 + 'px';
            content.style.padding = `${padding}px`;
        }
    });
});



/* ********************************** */
/*           MENU RESPONSIVE          */
/* ********************************** */
let overlay = document.querySelector('#overlay');
let menuHamburger = document.querySelector('.menu-hamburger');
let menuResponsive = document.querySelector('.menu-responsive');
let menuClose = document.querySelector('.btn-close-responsive');

menuHamburger.addEventListener('click', () => {
    menuResponsive.classList.add('active');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Bloquea el scroll
});

menuClose.addEventListener('click', () => {
    menuResponsive.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Desbloquea el scroll
});
