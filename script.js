const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    if (e.target.matches('.next')) {
        slider.append(items[0]);
    } else if (e.target.matches('.prev')) {
        slider.prepend(items[items.length - 1]);
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', activate);
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

const marqueeImgs = document.querySelectorAll('.marquee-img');

marqueeImgs.forEach(img => {
    img.addEventListener('click', () => {
        console.log()
        const container2 = document.querySelector('.container2');
        const imgName = img.src.split('/').pop().split('.')[0];
        container2.style.backgroundImage = `url(./img/codigo${img.src.split('/').pop()})`;
    });
});

document.querySelector('.contact').addEventListener('click',function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
