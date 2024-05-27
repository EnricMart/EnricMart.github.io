const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    if (e.target.matches('.next')) {
        slider.append(items[0]);
    } else if (e.target.matches('.prev')) {
        slider.prepend(items[items.length - 1]);
    }
}

document.addEventListener('click', activate, false);

document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('.contact');
    const container4 = document.querySelector('.container4');

    contactButton.addEventListener('click', function() {
        container4.scrollIntoView({ behavior: 'smooth' });
    });
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}

// Add mailto functionality
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:emartorellv2223@politecnics.barcelona?subject=Contact%20Form&body=Nombre%3A%20${encodeURIComponent(name)}%0AEmail%3A%20${encodeURIComponent(email)}%0AMensaje%3A%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
});
