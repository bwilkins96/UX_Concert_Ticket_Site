// Simulate 'My Cart' functionality

function clearItems() {
    const items = document.querySelectorAll('.cartItem');
    const cartIcons = document.querySelectorAll('.fa-cart-plus');

    for(let item of items) {
        item.remove();
    }

    for(let icon of cartIcons) {
        icon.classList.remove('fa-cart-plus');
        icon.classList.add('fa-cart-shopping');
    }

    calcSubTotal(true);

    if (!$('#noItems').length) {
        $('.cartContainer').append('<h2 id="noItems">There are no items in the cart!<h2>');
    }
}

function deleteItem() {
    clearItems();
}

function calcSubTotal(cleared=false) {
    const numInput = document.querySelector('.numTickets');
    const subTotalDisplay = document.querySelector('.subTotal strong');

    if (cleared) {
        return subTotalDisplay.innerText = `$0.00`;
    }
    
    const ticketNum = Number(numInput.value);
    const subTotal = ticketNum * 25;
    subTotalDisplay.innerText = `$${subTotal}.00`;
}