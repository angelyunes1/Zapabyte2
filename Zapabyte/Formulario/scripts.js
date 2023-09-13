// Obtén el formulario, el elemento del mensaje de confirmación y el mensaje emergente por su ID
const contactForm = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('success-message-contact');
const emergentMessage = document.createElement('div'); // Crea un elemento div para el mensaje emergente
emergentMessage.className = 'hidden'; // Establece la clase oculta inicialmente


// Agrega el mensaje emergente al final del formulario
contactForm.appendChild(emergentMessage);

// Agrega un controlador de eventos para el envío del formulario
contactForm.addEventListener('submit', function (event) {
    // Evita que el formulario se envíe de forma predeterminada
    event.preventDefault();

    // Aquí puedes realizar el envío del formulario al servidor si lo necesitas
    // Puedes usar fetch() o AJAX para enviar los datos al servidor

    // Muestra el mensaje de confirmación
    confirmationMessage.style.display = 'block';

    // Muestra el mensaje emergente durante 5 segundos y luego lo oculta
    emergentMessage.style.display = 'block';
    setTimeout(() => {
        emergentMessage.style.display = 'none';
    }, 5000);

    // Limpia el formulario si lo deseas
    contactForm.reset();
});