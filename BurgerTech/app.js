let cart = [];
const cartList = document.getElementById('cartList');
const totalPriceEl = document.getElementById('totalPrice');
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('foodName').value;
    const price = parseInt(document.getElementById('foodPrice').value);

    cart.push({ name, price });
    renderCart();
    orderForm.reset(); 
});

cartList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        cart.splice(index, 1);  
        renderCart();
    }
});

window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        processCheckout();
    } else if (e.key === 'Escape') {
        cart = [];
        renderCart();
        console.log("Giỏ hàng đã được làm trống (Esc)");
    }
});

function processCheckout() {
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }
    const total = calculateTotal();
    alert(`Thanh toán thành công: ${total} VNĐ. Cảm ơn quý khách!`);
    cart = [];
    renderCart();
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}


function renderCart() {
    cartList.innerHTML = cart.map((item, index) => `
        <li class="employee-item">
            <span>${item.name} - ${item.price.toLocaleString()} VNĐ</span>
            <button class="delete-btn" data-index="${index}">Xóa</button>
        </li>
    `).join('');
    
    totalPriceEl.textContent = calculateTotal().toLocaleString();
}