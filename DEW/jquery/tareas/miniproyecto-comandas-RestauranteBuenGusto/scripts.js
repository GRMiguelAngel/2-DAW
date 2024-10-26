$(document).ready(function () {
    let selectedProducts = {};

    $('.menu-btn').click(function () {
        const category = $(this).data('category');
        loadSubCategories(category);
    });

    function loadSubCategories(category) {
        $('.sub-menu').empty();
        $('.product-list').empty();
        
        const subCategories = {
            'bebidas': ['Calientes', 'Refrescos', 'Alcohólicas'],
            'primer-plato': ['Sopa', 'Ensalada'],
            'segundo-plato': ['Carne', 'Pescado', 'Vegetariano'],
            'postres': ['Dulces', 'Frutas']
        };

        subCategories[category].forEach(sub => {
            $('.sub-menu').append(`<button class="sub-menu-btn" data-subcategory="${sub}">${sub}</button>`);
        });

        $('.sub-menu-btn').click(function () {
            const subCategory = $(this).data('subcategory');
            loadProducts(subCategory);
        });
    }

    function loadProducts(subCategory) {
        $('.product-list').empty();

        $.getJSON('productos.json', function (data) {
            const products = data[subCategory];
            products.forEach(products => {
                $('.product-list').append(`
                    <div class="producto" data-id="${products.id}">
                        <span>${products.nombre}</span>
                        <span class="cantidad">0</span>
                        <button class="btn-decrementar">-</button>
                        <button class="btn-incrementar">+</button>
                    </div>
                `);
            });

            $('.btn-incrementar').click(function () {
                const amountOfSpan = $(this).siblings('.cantidad');
                let amount = parseInt(amountOfSpan.text());
                amount++;
                amountOfSpan.text(amount);
                updateSelectedProducts($(this).closest('.producto'), amount);
            });

            $('.btn-decrementar').click(function () {
                const amountOfSpan = $(this).siblings('.cantidad');
                let amount = parseInt(amountOfSpan.text());
                if (amount > 0) {
                    amount--;
                    amountOfSpan.text(amount);
                    updateSelectedProducts($(this).closest('.producto'), amount);
                }
            });
        });
    }

    function updateSelectedProducts(productDiv, amount) {
        const productId = productDiv.data('id');
        const productName = productDiv.find('span').first().text();

        if (amount > 0) {
            selectedProducts[productId] = { nombre: productName, amount: amount };
        } else {
            delete selectedProducts[productId];
        }

        showSelectedProducts();
    }

    function showSelectedProducts() {
        $('#productos-seleccionados').empty();
        $.each(selectedProducts, function (id, products) {
            $('#productos-seleccionados').append(`<li>${products.nombre}: ${products.amount}</li>`);
        });
    }

    $('#enviarComanda').click(function () {
        if (Object.keys(selectedProducts).length > 0) {
            $('#mensaje-confirmacion').fadeIn().delay(2000).fadeOut();
            selectedProducts = {};
            showSelectedProducts();
            $('.product-list').find('.cantidad').text(0);
        } else {
            alert('No hay productos seleccionados para enviar.');
        }
    });
});