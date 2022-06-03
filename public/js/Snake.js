//create class senek - basically kalau dalam files class tu sendiri kita akan export(kat mainscene) so that class mainscene boleh import from here
export default class Snake {
    //const pass scene 
    constructor(scene){
        this.scene = scene; //create scene property
        this.lastMoveTime = 0;
        this.moveInterval = 1000;
        this.direction = Phaser.Math.Vector2.DOWN; //vector2 = 2D so consists of up/down/lft/rght
        this.body = [];
        this.rec = []; // means rec ni dia dalam array tauS
        this.body.push(this.scene.add.rectangle(100,100,16,16,0xF26B8B).setOrigin(0)); // push() method adds one or more elements to the end of an array and returns the new length of the array. - kalau nak letak color code kat depan kena ada 0x
         //setOrigin(x,y) = place the object //color = amaranth

         
        this.rec.push(
        this.scene.add.rectangle(10,10,16,16,0xFFFFFF).setOrigin(0)); //coral pink
        
        scene.input.keyboard.on('keydown', e  => {
            this.keydown(e); //setiap kali tekan any key on keyboard dia akan bagi inst untuk ke bawah

        
        })
}

keydown(event){
    console.log(event);
    switch (event.keyCode){
        case 37: //left
        this.direction = Phaser.Math.Vector2.LEFT;
        break;
        case 38://up
        this.direction = Phaser.Math.Vector2.UP;
        break;
        case 39://right
        this.direction = Phaser.Math.Vector2.RIGHT;
        break;
        case 40://down
        this.direction = Phaser.Math.Vector2.DOWN;
        break;
    }
  

}


   
    update(time)
    {
        // this.body[0].x += this.direction.x; //the movement of the body
        if (time >= this.lastMoveTime + this.moveInterval) {
            this.lastMoveTime = time;
            this.move();
        }
       
    }

 move(){

    this.body[0].x += this.direction.x * 16; 
    this.body[0].y += this.direction.y * 16; 


 }

}