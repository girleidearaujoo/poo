const celular1 = new Celular(
    "Samsung",
    "S20 FE",
    "6",
    "128",
    "OCTA-CORE",
    "4",
    "s20fe.webp"
);
const celular2 = new Celular(
    "Motorola",
    "MotoG53",
    "4",
    "128",
    "Snapdragon 480 Octacore",
    "3",
    "motog52.jpg"
);
const celular3 = new Celular(
    "Apple",
    "14s Pro Max",
    "12",
    "513",
    "A16",
    "4",
    "iphone14.jpg"
);
const celular4 = new Celular(
    "Samsung",
    "Z Flip 4",
    "8",
    "256",
    "Cortex-X2",
    "4",
    "zflip4.jpg"
);
const celular5 = new Celular(
    "Motorola",
    "EDGE 40",
    "8",
    "256",
    "Cortex-A78",
    "3",
    "moto-edge-40-02.webp"
);
document.write(
    `
    <div class="card">
        <img class = "foto" src="img/${celular1.foto}">
        <div class="info">
            <h3 class="modelo">
                ${celular1.modelo}
            </h3>
            <p class="marca">
                ${celular1.marca}
            </p>
            <span class="outros">${celular1.processador}</span>
            <span class="separador">|</span>
            <span class="outros">${celular1.armazenamento}</span>
            <span class="separador">|</span>
            <span class="outros">${celular1.ram}</span>
            <span class="separador">|</span>
            <span class="outros">${celular1.qtdDeCameras}</span>
            <span class="separador">|</span>
        </div>
    </div>
    `
)