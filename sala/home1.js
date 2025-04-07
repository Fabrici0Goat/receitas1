let currentIndex = 0;
const carrosselContainer = document.querySelector('.carrossel-container');
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;

// Função para mover para o próximo slide
function nextSlide() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta ao primeiro slide
    }
    updateCarousel();
}

// Função para mover para o slide anterior
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Vai para o último slide
    }
    updateCarousel();
}

// Atualiza a posição do carrossel
function updateCarousel() {
    const offset = -currentIndex * 100; // Calcula o deslocamento
    carrosselContainer.style.transform = `translateX(${offset}%)`;
}

// Navegação automática (opcional)
setInterval(nextSlide, 3000); // Muda de slide a cada 3 segundos