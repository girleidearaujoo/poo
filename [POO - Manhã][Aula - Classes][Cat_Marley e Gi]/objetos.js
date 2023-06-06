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
const tv1 = new Tv(
    "AOC",
    "43S5135/78G",
    '43"',
    'aoc.webp'
);
const tv2 = new Tv(
    "Philips",
    "70PUG7406/78",
    '70"',
    'philips.jpg'
);
const tv3 = new Tv(
    "LG",
    "43UQ7500",
    '43"',
    'lg-led.webp'
);
const tv4 = new Tv(
    "LG",
    "OLED55C1",
    '55"',
    'lg-oled.webp'
);
const tv5 = new Tv(
    "Samsung",
    "QN55QN85BAGXZD",
    '55"',
    'samsung.webp'
);
var tvs = [tv1, tv2, tv3, tv4, tv5]

for (let i = 0; i < tvs.length; i++) {
    document.write(
        `
        <div class="card">
            <img class = "foto" src="img/${tvs[i].foto}">
            <div class="info">
                <h3 class="modelo">
                    ${tvs[i].modelo}
                </h3>
                <p class="marca">
                    ${tvs[i].marca}
                </p>
            </div>
        </div>
        `
    )
}

// Criando 2 listas de Favoritos:
let meusProdutosTop = new Favoritos();

// Adicionando produtos À primeira lista de favoritos
meusProdutosTop.adicionarProduto(celular1);
meusProdutosTop.adicionarProduto(tv1);

// Adicionando produtos À segunda lista de favoritos
// produtosTopDaDarline.adicionarProduto(celular1);
// produtosTopDaDarline.adicionarProduto(tv1);
// produtosTopDaDarline.adicionarProduto(celular5);

// Exibindo os produtos da primeira lista no HTML:
// meusProdutosTop.exibirNoHTML(ss);

// Exibindo os produtos da segunda lista no HTML:
// produtosTopDaDarline.exibirNoHTML();

// produtosTopDaDarline.removerProduto(1)

