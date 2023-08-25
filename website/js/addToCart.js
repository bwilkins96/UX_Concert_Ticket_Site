// Simulate add to cart functionality

function handleSuccessMessage() {
    const successMessage = document.querySelector('.message');

    if (successMessage) {
        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 1000);
    }
}

function addToCart() {
    const cartIcons = document.querySelectorAll('.fa-cart-shopping');

    for (let icon of cartIcons) {
        
        if (icon.classList.contains('fa-cart-shopping')) {
            icon.classList.remove('fa-cart-shopping');
            icon.classList.add('fa-cart-plus');
        }
    }

    handleSuccessMessage();
}