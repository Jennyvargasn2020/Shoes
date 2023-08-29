
const productos = {
    1: {
        nombre: "Zapato deportivo running",
        precio: "$180.000",
        descripcion: "Zapato deportivo ideal para running y actividades deportivas. Diseñado para brindar comodidad y soporte durante tus entrenamientos.",
        tallas: ["35", "36", "37", "38", "39", "40"],
        imagenes: [
            "../images/producto1.png"
        ]
    },
    2: {
        nombre: "Zapato casual hombre",
        precio: "$135.000",
        descripcion: "Zapato casual perfecto para el día a día. Combina estilo y comodidad en un único diseño moderno.",
        tallas: ["38", "39", "40", "41", "42", "43", "44"],
        imagenes: [
            "../images/producto2.png"

        ]
    },
    3: {
        nombre: "Zapato Vans",
        precio: "$85.000",
        descripcion: "Zapato casual perfecto para el día a día. Combina estilo y comodidad en un único diseño moderno.",
        tallas: ["35", "36", "37", "38", "39"],
        imagenes: [
            "../images/producto3.png"

        ]

    },
    4: {
        nombre: "Zapato Swiss",
        precio: "$98.000",
        descripcion: "Zapato casual perfecto para el día a día. Combina estilo y comodidad en un único diseño moderno.",
        tallas: ["35", "36", "37", "38", "39", "40"],
        imagenes: [
            "../images/producto4.png"

        ]

    },
    5: {
        nombre: "Zapato Swiss azul claro",
        precio: "$98.000",
        descripcion: "Zapato casual perfecto para el día a día. Combina estilo y comodidad en un único diseño moderno.",
        tallas: ["35", "36", "37", "38", "39", "40"],
        imagenes: [
            "../images/producto5.png"

        ]

    },
    6: {
        nombre: "Zapato estilo converse",
        precio: "$135.000",
        descripcion: "Zapato casual perfecto para el día a día. Combina estilo y comodidad en un único diseño moderno.",
        tallas: ["35", "36", "37", "38", "39", "40"],
        imagenes: [
            "../images/producto6.png"

        ]
    },
    7: {
        nombre: "Botas deluxe",
        precio: "$220.000",
        descripcion: "Zapato casual perfecto para el día a día. Combina estilo y comodidad en un único diseño moderno.",
        tallas: ["35", "36", "37", "38", "39", "40"],
        imagenes: [
            "../images/producto7.png"

        ]

    },
    8: {
        nombre: "Botas Royal",
        precio: "$245.000",
        descripcion: "Zapato casual perfecto para el día a día. Combina estilo y comodidad en un único diseño moderno.",
        tallas: ["35", "36", "37", "38", "39", "40"],
        imagenes: [
            "../images/producto8.png"

        ]
    },
    9: {
        nombre: "Zapato tacon magnifique",
        precio: "$250.000",
        descripcion: "Zapato casual perfecto para el día a día. Combina estilo y comodidad en un único diseño moderno.",
        tallas: ["35", "36", "37", "38", "39", "40"],
        imagenes: [
            "../images/producto9.png"

        ]

    },

}    

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('producto');
    const product = productos[productId];

    if (product) {
        document.getElementById("product-image").src = product.imagenes[0];
        document.getElementById("product-name").textContent = product.nombre;
        document.querySelector(".price").textContent = product.precio;
        document.querySelector(".description").textContent = product.descripcion;
        const sizeSelect = document.getElementById("size");
        sizeSelect.innerHTML = '';
        product.tallas.forEach((talla) => {
            const option = document.createElement("option");
            option.value = talla;
            option.textContent = talla;
            sizeSelect.appendChild(option);
        });
    } else {
        console.log(`Producto con ID ${productId} no encontrado.`);
    }
});
