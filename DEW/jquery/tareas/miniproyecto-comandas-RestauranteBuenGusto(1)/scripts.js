
$(document).ready(function () {
    let productosSeleccionados = {};

    $('.menu-btn').click(function () {
        const categoria = $(this).data('category');
        cargarSubCategorias(categoria);
    });

    function cargarSubCategorias(categoria) {
        $('.sub-menu').empty();
        $('.product-list').empty();
        
        const subcategorias = {
            'bebidas': ['Calientes', 'Refrescos', 'Alcohólicas'],
            'primer-plato': ['Sopa', 'Ensalada'],
            'segundo-plato': ['Carne', 'Pescado', 'Vegetariano'],
            'postres': ['Dulces', 'Frutas']
        };

        subcategorias[categoria].forEach(sub => {
            $('.sub-menu').append(`<button class="sub-menu-btn" data-subcategory="${sub}">${sub}</button>`);
        });

        $('.sub-menu-btn').click(function () {
            const subcategoria = $(this).data('subcategory');
            cargarProductos(subcategoria);
        });
    }

    function cargarProductos(subcategoria) {
        $('.product-list').empty();

        $.getJSON('productos.json', function (data) {
            const productos = data[subcategoria];
            productos.forEach(producto => {
                $('.product-list').append(`
                    <div class="producto" data-id="${producto.id}">
                        <span>${producto.nombre}</span>
                        <div class="product_qty">
                        <span class="cantidad">0</span>
                            <button class="btn-decrementar">-</button>
                            <button class="btn-incrementar">+</button>
                        </div>
                    </div>
                `);
            });

            $('.btn-incrementar').click(function () {
                const cantidadSpan = $(this).siblings('.cantidad');
                let cantidad = parseInt(cantidadSpan.text());
                cantidad++;
                cantidadSpan.text(cantidad);
                actualizarProductosSeleccionados($(this).closest('.producto'), cantidad);
            });

            $('.btn-decrementar').click(function () {
                const cantidadSpan = $(this).siblings('.cantidad');
                let cantidad = parseInt(cantidadSpan.text());
                if (cantidad > 0) {
                    cantidad--;
                    cantidadSpan.text(cantidad);
                    actualizarProductosSeleccionados($(this).closest('.producto'), cantidad);
                }
            });
        });
    }

    function actualizarProductosSeleccionados(productoDiv, cantidad) {
        const productoId = productoDiv.data('id');
        const productoNombre = productoDiv.find('span').first().text();

        if (cantidad > 0) {
            productosSeleccionados[productoId] = { nombre: productoNombre, cantidad: cantidad };
        } else {
            delete productosSeleccionados[productoId];
        }

        mostrarProductosSeleccionados();
    }

    function mostrarProductosSeleccionados() {
        $('#productos-seleccionados').empty();
        $.each(productosSeleccionados, function (id, producto) {
            $('#productos-seleccionados').append(`<li>${producto.nombre}: ${producto.cantidad}</li>`);
        });
    }

    $('#enviarComanda').click(function () {
        if (Object.keys(productosSeleccionados).length > 0) {
            $('#mensaje-confirmacion').fadeIn().delay(2000).fadeOut();
            productosSeleccionados = {};
            mostrarProductosSeleccionados();
            $('.product-list').find('.cantidad').text(0);
        } else {
            alert('No hay productos seleccionados para enviar.');
        }
    });
});
        