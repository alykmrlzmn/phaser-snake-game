//create snake class
import Snake from './Snake.js'

//to make it available we need to add export infront of the class
export default class MainScene extends Phaser.Scene {
    constructor ()
    {
        super('MainScene');
    }


    create()
    {
        this.snake = new Snake(this);
    }

    update(time){
    
        this.snake.update(time);
    } // kalau buat update kat sini kena buat update dekat class snake jugak sbb kita import dri situ
}