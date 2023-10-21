function parede(x,y, width, height){
    return Matter.Bodies.rectangle(x,y,width, height, {
        isStatic: true,
        render: {
            fillStyle: '#868e96'
        }
    });
}

function playerVisual(player){
    return MutationObserver.Bodies.polygon(x, y, player.qtdLados, player.raio, {
        restitution: 0.5,
        label: player.nome,
        isStatic: true,
        render:{
            fillStyle: player.cor
        }
    });
}

function balaVisual(bala,x,y) {
    return Matter.Bodies.circle(x, y, bala.raio,{
        restitution: 0.5,
        render: {
            fillStyle: bala.cor
        }
    });
}

// -------------------------------------------------------------------------------



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





// Construção das 4 paredes:

Matter.World.add(engine.world, [

    parede(280, 0, 2000, 20),   // top

    parede(280, 800, 2000, 20), // bottom

    parede(0, 400, 20, 1024),   // left

    parede(1024, 400, 20, 1024), // right

]);



// Criação das balas e players

let bala1 = new Bala(10, '#aa8822');

let bala2 = new Bala(12, '#aa88aa');

let player1 = new Player('Alex', 5, 30, '#888888', 17, 15, bala1);

let player2 = new Player('Sandro', 8, 40, '#333333', 10, 12, bala2);



// Posicionamento dos players na tela

Matter.World.add(engine.world, playerVisual(player1, 90, 330));

Matter.World.add(engine.world, playerVisual(player2, 900, 330));



