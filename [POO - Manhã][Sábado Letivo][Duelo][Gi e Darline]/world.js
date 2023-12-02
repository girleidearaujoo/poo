// Parede
function parede(x, y, width, height) {
    return Matter.Bodies.rectangle(x, y, width, height, {
        isStatic: true,
        render: {
            fillStyle: '#868e96'
        }
    });
}

function paredeColorida(x, y, width, height, color) {
    return Matter.Bodies.rectangle(x, y, width, height,{
        isStatic: true,
        render: {
            fillStyle: color
        }
    });
}

// Player
function dueloVisual(gerente) {
    let player1Visual = Matter.Bodies.polygon(90, 310, gerente.player1.qtdLados, gerente.player1.raio, {
        label: gerente.player1.nome,
        isStatic: true,
        restitution: 0.5,
        render: {
            fillStyle: gerente.player1.cor
        }
    });
    let player2Visual = Matter.Bodies.polygon(900, 310, gerente.player2.qtdLados, gerente.player2.raio, {
        label: gerente.player2.nome,
        isStatic: true,
        restitution: 0.5,
        render: {
            fillStyle: gerente.player2.cor
        }
    });
    let player3Visual = Matter.Bodies.polygon(90, 490, gerente.player3.qtdLados, gerente.player3.raio, {
        label: gerente.player3.nome,
        isStatic: true,
        restitution: 0.5,
        render: {
            fillStyle: gerente.player3.cor
        }
    });
   let player4Visual = Matter.Bodies.polygon(900, 490, gerente.player4.qtdLados, gerente.player4.raio, {
        label: gerente.player4.nome,
        isStatic: true,
        restitution: 0.5,
        render: {
            fillStyle: gerente.player4.cor
        }
    });
    return [player1Visual, player2Visual, player3Visual, player4Visual];

}

// Bala
function balaVisual(player, lado) {
    if(lado === 'esquerda'){
        return Matter.Bodies.circle(165, 300, player.bala.raio, {
            label: `balaEsquerda`,
            restitution: 0.5,
            render: {
                fillStyle: player.bala.cor
            }
        });
    } else if(lado === 'esquerda2'){
        return Matter.Bodies.circle(165, 360, player.bala.raio, {
            label: `balaEsquerda2`,
            restitution: 0.5,
            render: {
                fillStyle: player.bala.cor
            }
        });
    } else if(lado === 'direita'){
        return Matter.Bodies.circle(820, 300, player.bala.raio, {
            label: `balaDireita`,
            restitution: 0.5,
            render: {
                fillStyle: player.bala.cor
            }
        });
    } else 
    if(lado === 'direita2'){
        return Matter.Bodies.circle(820, 360, player.bala.raio, {
            label: `balaDireita2`,
            restitution: 0.5,
            render: {
                fillStyle: player.bala.cor
            }
        });
    }
}

// -------------------------------------------------


// Atirar
function atirar(player, lado) {
    let projetil = balaVisual(player, lado);

    if (lado === 'esquerda'){
        Matter.Body.setVelocity(projetil, {
            x: rand(1, player.velocidadeMaxDoTiro),
            y: -8
        });
    } else if(lado === 'esquerda2'){
        Matter.Body.setVelocity(projetil, {
            x: rand(-1, -player.velocidadeMaxDoTiro),
            y: -8
        });
    } else if(lado === 'direita'){
            Matter.Body.setVelocity(projetil, {
                x: rand(-1, -player.velocidadeMaxDoTiro),
                y: -8
            });
    }  else if(lado === 'direita2'){
        Matter.Body.setVelocity(projetil, {
            x: rand(-1, -player.velocidadeMaxDoTiro),
            y: -8
        });
    }    
    Matter.Body.setAngularVelocity(projetil, rand(0, player.velocidadeMaxDoTiro));

    Matter.World.add(engine.world, projetil);
}

function receberTiro(event) {
    event.pairs
        .filter((pair) => pair.bodyA.label === player1.nome)
        .forEach((pair) => {
            if (pair.bodyB.label === 'balaDireita') {
                if (player1.vida - player2.ataque > 0) {
                    player1.vida -= player2.ataque;
                    console.log(`Player 1: ${player1.vida}`);
                } else {
                    player1.vida = 0;
                    pair.bodyA.render.fillStyle = '#dedede';
                    console.log(`Player 1: PERDEU`);
                }
            }
            Matter.World.remove(engine.world, pair.bodyB);
        });
    event.pairs    
        .filter((pair) => pair.bodyA.label === player3.nome)
        .forEach((pair) => {
            if (pair.bodyB.label === 'balaDireita2') {
                if (player3.vida - player4.ataque > 0) {
                    player3.vida -= player4.ataque;
                    console.log(`Player 3: ${player3.vida}`);
                } else {
                    player3.vida = 0;
                    pair.bodyA.render.fillStyle = '#dedede';
                    console.log(`Player 3: PERDEU`);
                }
            }
            Matter.World.remove(engine.world, pair.bodyB);
        });
        event.pairs    
        .filter((pair) => pair.bodyA.label === player4.nome)
        .forEach((pair) => {
            if (pair.bodyB.label === 'balaDireita2') {
                if (player4.vida - player3.ataque > 0) {
                    player4.vida -= player3.ataque;
                    console.log(`Player 4: ${player4.vida}`);
                } else {
                    player4.vida = 0;
                    pair.bodyA.render.fillStyle = '#dedede';
                    console.log(`Player 4: PERDEU`);
                }
            }
            Matter.World.remove(engine.world, pair.bodyB);
        });
    event.pairs
        .filter((pair) => pair.bodyA.label === player2.nome)
        .forEach((pair) => {
            if (pair.bodyB.label === 'balaEsquerda') {
                // 
                if (player2.vida - player1.ataque > 0) {
                    player2.vida -= player1.ataque;
                    console.log(`Player 2: ${player2.vida}`);
                } else {
                    player2.vida = 0;
                    pair.bodyA.render.fillStyle = '#dedede';
                    console.log(`Player 2: PERDEU!`);
                }
                Matter.World.remove(engine.world, pair.bodyB);
            }
        });
}


// ====================================================

// matter.js has a built in random range function, but it is deterministic
function rand(min, max) {
    return Math.random() * (max - min) + min;
}

// ====================================================
// engine
let engine = Matter.Engine.create();

// render
let render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1024,
        height: 800,
        wireframes: false,
        background: '#f8f9fa'
    }
});
Matter.Render.run(render);

// runner
let runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);
// ====================================================



function trianguloCadente() {
    let triangulo  = Matter.Bodies.polygon(rand(300, 700), 30, 3 ,10, {
        isStatic: false,
        restitution: 0.5,
        render: {
            fillStyle: '#645626'
        }
    });
    Matter.World.add(engine.world, triangulo)
}
setInterval(trianguloCadente, 800)

// Construção das 4 paredes:
Matter.World.add(engine.world, [
    parede(280, 0, 2000, 20),   // top
    parede(280, 800, 2000, 20), // bottom
    parede(0, 400, 20, 1024),   // left
    parede(1024, 400, 20, 1024), // right
    paredeColorida(520, 700, 20, 500, '#ee8b47'), // parede de baixo
    paredeColorida(520, 100, 20, 200, '#285b8a'), // parede de cima
    
]);
// x, y, width, height

// Criação dos players
let player1 = new Player('Gih', 6, 70, '#261069', 12, 20);
let player2 = new Player('Darline', 6, 70, '#82102e', 12, 20);
let player3 = new Player('Leticia', 8, 50, '#103d82', 12, 20);
let player4 = new Player('Ellen', 8, 50, '#8a1555', 12, 20);
let juiz = new GerenciadorDeDuelo(player1, player2, player3, player4)

// Posicionamento dos players na tela
Matter.World.add(engine.world, dueloVisual(juiz));


// Evento de colisão
Matter.Events.on(engine, 'collisionStart', receberTiro);

// Eventos de Teclas
document.addEventListener('keydown', function (e) {
    if(player1.vida > 0 && player2.vida > 0)
    if (e.key === 'd') { // left arrow key
        atirar(player1, 'esquerda');
    } else if (e.key === 'ArrowLeft') { // right arrow key
        atirar(player2, 'direita');
    }
});

document.addEventListener('keydown', function (e) {
    if(player3.vida > 0 && player4.vida > 0)
    if (e.key === 'a') { // left arrow key
        atirar(player3, 'esquerda');
    } else if (e.key === 'ç') { // right arrow key
        atirar(player4, 'direita');
    }
});

function atirar(player, lado) {
    let projetil = balaVisual(player, lado);

    if (lado === 'esquerda'){
        Matter.Body.setVelocity(projetil, {
            x: rand(1, player.velocidadeMaxDoTiro),
            y: -8
        });
    } else if(lado === 'direita'){
        Matter.Body.setVelocity(projetil, {
            x: rand(-1, -player.velocidadeMaxDoTiro),
            y: -8
        });
    }
    Matter.Body.setAngularVelocity(projetil, rand(0, player.velocidadeMaxDoTiro));

    Matter.World.add(engine.world, projetil);
}