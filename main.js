const config = {
    height: window.height,
    width: 350,
    parent: "container",
    type: Phaser.AUTO,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: precarga,
        create: crear,
        update: updatesss,
    },
}
var juegoNelson = new Phaser.Game(config);

function precarga() {
    console.log("soy preload");
    this.load.image("background", "./assets/images/background/background.png");
    this.load.audio('cancionCarlosFondo', 'assets/sounds/music.mp3');
    this.load.image("spines", "./assets/images/wall_enemies/1.png");
}

function crear() {
    console.log("soy create")
    this.imagenFondo = this.add.image(0, 0, "background"); //cargo la imagen de fondo del juego


    //genero el grupo DownSpikes y defino que va a formarse de "spines", cuantos y la posición
    this.Downspikes = this.physics.add.staticGroup({
        key: 'spines',
        repeat: 5,
        setXY: { x: 12, y: 550, stepX: 70 },
    });

    // - https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.GameObjects.Group.GroupCreateConfig
    //genero el grupo UpperSpikes y defino que va a formarse de "spines", cuantos y la posición
    this.UpperSpikes = this.physics.add.staticGroup({
        key: 'spines',
        repeat: 5,
        setXY: { x: 12, y: 150, stepX: 70 }
    });


    this.UpperSpikes.children.iterate(function (spines) {
        spines.angle = 180;// Girar 180 grados
        spines.setScale(0.25, 0.25);
    });


    let sound = this.sound.add('cancionCarlosFondo'); // cargo el sonido del juego
    sound.play(); //señalo para activar el sonido del juego

    // spines = this.spines = this.add.image(80, 480, "spines"); // generando una sola espina
    // spines.setScale(0.25, 0.25); // señalando tamaño de la espina
}

function updatesss(time, delta) {
    console.log("soy update")
};