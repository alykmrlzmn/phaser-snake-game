
import MainScene from "./MainScene.js";

const config = {
    width: 640,
    height: 640,
    type: Phaser.AUTO, //boleh tak lepasni tolong cek every alphabet tq
    parent: 'phaser-game', //this is yg kena panggil dekat html tu under div
    scene: [MainScene]

};

new Phaser.Game(config);
