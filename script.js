// Mock data for product cards
const products = [
    { name: 'Karibu Chai', image: 'chai-image.jpg', description: 'Description of Karibu Chai...' },
    { name: 'Chai Dawa', image: 'chai-dawa-image.jpg', description: 'Description of Chai Dawa...' },
    // Add other product details similarly
];

document.addEventListener('DOMContentLoaded', function () {
    // Populate product cards dynamically
    const productCardsContainer = document.querySelector('.product-cards');
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name} Image">
            <p>${product.description}</p>
        `;
        productCardsContainer.appendChild(card);
    });

    // Mock team icons
    const teamIconsContainer = document.querySelector('.team-icons');
    teamIconsContainer.innerHTML = `
        <div class="team-icon">Research Icon</div>
        <div class="team-icon">Nutritionist Icon</div>
    `;

    // Mock images for the slider
    const sliderImages = [
        'slider-image1.jpg',
        'slider-image2.jpg',
        'slider-image3.jpg'
    ];

    let currentImageIndex = 0;
    const slider = document.createElement('div');
    slider.classList.add('slider');
    document.body.insertBefore(slider, document.body.firstChild);

    function updateSlider() {
        slider.style.backgroundImage = `url(${sliderImages[currentImageIndex]})`;
    }

    function nextSlide() {
        currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
        updateSlider();
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    updateSlider();
});
