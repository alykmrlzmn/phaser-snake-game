//create class senek - basically kalau dalam files class tu sendiri kita akan export(kat mainscene) so that class mainscene boleh import from here
export default class Snake {
    //const pass scene 
    constructor(scene){
        this.scene = scene; 
        this.lastMoveTime = 0;
        this.moveInterval = 100; //in miliseconds
        this.tileSize = 16;
        this.direction = Phaser.Math.Vector2.DOWN; //vector2 = 2D so consists of up/down/lft/rght
        this.body = [];

     
        this.body.push(
            this.scene.add.rectangle(this.scene.game.config.width /2, this.scene.game.config.height /2,
             this.tileSize, 
             this.tileSize,
             0xF26B8B)
            .setOrigin(0)); // push() method adds one or more elements to the end of an array and returns the new length of the array. - kalau nak letak color code kat depan kena ada 0x
 

        this.body.push(
                this.scene.add.rectangle(this.scene.game.config.width /2, this.scene.game.config.height /2,
                 this.tileSize, 
                 this.tileSize,
                 0xFFA500)
                .setOrigin(0)); 

     

        this.apple = this.scene.add
        .rectangle(0,0, this.tileSize,this.tileSize, 0x00ff00)
        .setOrigin(0);

        this.positionApple();

        scene.input.keyboard.on('keydown', e  => {
            this.keydown(e); //setiap kali tekan any key on keyboard dia akan bagi inst untuk ke bawah

        
        })
}

 positionApple(){
    this.apple.x = Math.floor(
        (Math.random() * this.scene.game.config.width) / this.tileSize
        ) * this.tileSize; 
    //math.floor() untuk make sure the number will always be integer
    
    this.apple.y = Math.floor(
        (Math.random() * this.scene.game.config.height) / this.tileSize
        ) * this.tileSize; 
 }

keydown(event){
    console.log(event);
    switch (event.keyCode){
        case 37: //left
        if(this.direction !== Phaser.Math.Vector2.RIGHT) 
        this.directiom = Phaser.Math.Vector2.LEFT;
        break;
        case 38://up
        if(this.direction !== Phaser.Math.Vector2.DOWN) 
        this.direction = Phaser.Math.Vector2.UP;
        break;
        case 39://right
        if(this.direction !== Phaser.Math.Vector2.LEFT)
        this.direction = Phaser.Math.Vector2.RIGHT;
        break;
        case 40://down
        if(this.direction !== Phaser.Math.Vector2.UP) 
        this.direction = Phaser.Math.Vector2.DOWN;
        break;
    }
  

}


   
    update(time)
    {
        
        if (time >= this.lastMoveTime + this.moveInterval) {
            this.lastMoveTime = time;
            this.move();
        }
       
    }

 move(){

    //eat the apple - need to compare where the snake

    let x = this.body[0].x + this.direction.x * this.tileSize;
    let y = this.body[0].y + this.direction.y * this.tileSize;

    if (this.apple.x === x && this.apple.y === y) {
        //eaten the apple

        this.body.push(this.scene.add.rectangle(0,0, this.tileSize, this.tileSize, 0xffffff)
        .setOrigin(0)
        );
        this.positionApple();

    }
   
    for(let index = this.body.length - 1; index > 0; index--) {
        
        this.body[index].x = this.body[index-1].x;
        this.body[index].y = this.body[index-1].y;

    }

    this.body[0].x = x;
    this.body[0].y = y; 

 //death by going off screen
    if(this.body[0].x < 0 || //left
        this.body[0].x >= this.scene.game.config.width || //right
        this.body[0].y < 0 || //top
        this.body[0].y >= this.scene.game.config.height //down
        )
     {
        thid.scene.scene.restart()

    }

    //death by eating own tail - headpos === any of our tail positions

    let tail = this.body.slice(1)
    if(tail.some(s => s.x === this.body[0].x && s.y === this.body[0].y)
   
    ) {
        this.scene.scene.restart();
    }
 


 }

}
