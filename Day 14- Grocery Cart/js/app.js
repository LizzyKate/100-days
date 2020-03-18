(function() {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
    cartInfo.addEventListener('click', (e) => {
        cart.classList.toggle('show-cart')
    })
})();


(function() {
    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function(btn) {
        btn.addEventListener('click', (event) => {
            if (event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.replace('img', 'img-cart');
                const item = {};
                item.img = pos;
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;
                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let finalPrice = price.replace('$ ', '');
                item.price = finalPrice;
                const cartItem = document.createElement('div');

                cartItem.classList.add('cart-item', 'd-flix', 'justify-content-between', 'text-capitalize', 'my-3');

                cartItem.innerHTML = `<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
              <div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p><span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span></div><a href="#" id='cart-item-remove' class="cart-item-remove"><i class="fas fa-trash"></i></a></div>`;
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);
                alert('item added to the cart');
(function showTotals() {

    const total = [];
    const items = document.querySelectorAll('.cart-item-price');
    items.forEach(function(item) {
        total.push(parseFloat(item.textContent));
    })

    const totalMoney = total.reduce(function(total, item) {
        total += item;
        return total;
    }, 0);

    const finalMoney = totalMoney.toFixed(2);

    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;
})();

            }
        })
    })
})();

// (function showTotals() {

//     const total = [];
//     const items = document.querySelectorAll('.cart-item-price');
//     items.forEach(function(item) {
//         total.push(parseFloat(item.textContent));
//     })

//     const totalMoney = total.reduce(function(total, item) {
//         total += item;
//         return total;
//     }, 0);

//     const finalMoney = totalMoney.toFixed(2);

//     document.getElementById('cart-total').textContent = finalMoney;
//     document.querySelector('.item-total').textContent = finalMoney;
//     document.getElementById('item-count').textContent = total.length;
// })();