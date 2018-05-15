<!doctype html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8" />
    <title>Making your first Phaser 3 Game - Part 1</title>
    <script src="//cdn.jsdelivr.net/npm/phaser@3.1.1/dist/phaser.js"></script>
    <style type="text/css">
        body {
            margin: 0;
        }
    </style>
</head>
<body>

<script type="text/javascript">

    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);


    function preload () {
        this.load.image("space", "./assets/bg5.jpg");
        this.load.image("meteor", "./assets/meteor0001.png");
        this.load.image("meteorTwo", "./assets/meteor0002.png");
        this.load.image("meteorThree", "./assets/meteor0003.png");
        this.load.image("meteorFour", "./assets/meteor0004.png");
        this.load.image("meteorFive", "./assets/meteor0005.png");
        this.load.image("shuttle", "./assets/shuttle2.png");
        this.load.image("earth", "./assets/earth.png");            

    }

    function create () {
        this.add.image(400, 300, "space");
        this.earth = this.add.image(1, 850, "earth");
        this.earth.setScale(0.5);
        this.meteorOne = this.add.image(Math.floor(Math.random() * 780) + 10, -200, "meteor");
        this.meteorOne.setScale(0.6);
        this.meteorTwo = this.add.image(Math.floor(Math.random() * 780) + 10, -300, "meteorTwo"); 
        this.meteorTwo.setScale(0.7);
        this.meteorThree = this.add.image(Math.floor(Math.random() * 780) + 10, -400, "meteorThree");
        this.meteorTwo.setScale(0.5);
        this.meteorFour = this.add.image(Math.floor(Math.random() * 780) + 10, -200, "meteorFour");
        this.meteorFour.setScale(0.4);
        this.meteorFive = this.add.image(Math.floor(Math.random() * 780) + 10, -200, "meteorFive");
        this.meteorFive.setScale(0.2);

        this.shuttle = this.add.image(400, 550, "shuttle");
        this.shuttle.setScale(1.5);
      
        //this.cursors = game.input.keyboard.createCursorKeys();
        //this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    }


    function update () {

        this.meteorOne.y += 4;
        this.meteorTwo.y += 3;
        this.meteorThree.y += 2;
        this.meteorFour.y += 1;
        this.meteorFive.y += 5

        if (this.meteorOne.y > 800) {
            this.meteorOne.y = -200;
            this.meteorOne.x = Math.floor(Math.random() * 780) + 10;
            this.meteorOne.y += Math.floor(Math.random() * 8) + 1;

        }

        if (this.meteorTwo.y > 800) {
            this.meteorTwo.y = -200;
            this.meteorTwo.x = Math.floor(Math.random() * 780) + 10;
            this.meteorTwo.y += Math.floor(Math.random() * 8) + 1;
        }

        if (this.meteorThree.y > 800) {
            this.meteorThree.y = -200;
            this.meteorThree.x = Math.floor(Math.random() * 780) + 10;
            this.meteorThree.y += Math.floor(Math.random() * 8) + 1;
        }

        if (this.meteorFour.y > 800) {
            this.meteorFour.y = -200;
            this.meteorFour.x = Math.floor(Math.random() * 780) + 10;
            this.meteorFour.y += Math.floor(Math.random() * 8) + 1;
        }
        
        if (this.meteorFive.y > 800) {
            this.meteorFive.y = -200;
            this.meteorFive.x = Math.floor(Math.random() * 780) + 10;
            this.meteorFive.y += Math.floor(Math.random() * 8) + 1;
        }

        if (this.input.activePointer.isDown) {
            if (this.input.activePointer.x > this.shuttle.x) {
                this.shuttle.x += 10;
            }else if (this.input.activePointer.x < this.shuttle.x) {
                this.shuttle.x -= 10;
            }
           
        }
       
        //if (cursors.fireButton.isDown) {
        //    fire();
        //}

        if (Phaser.Geom.Intersects.RectangleToRectangle(this.shuttle.getBounds(), this.meteorOne.getBounds())) {
            this.cameras.main.shake(100);

        }
      
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.shuttle.getBounds(), this.meteorTwo.getBounds())) {
            this.cameras.main.shake(100);

        }

        if (Phaser.Geom.Intersects.RectangleToRectangle(this.shuttle.getBounds(), this.meteorThree.getBounds())) {
            this.cameras.main.shake(100);

        }

        if (Phaser.Geom.Intersects.RectangleToRectangle(this.shuttle.getBounds(), this.meteorFour.getBounds())) {
            this.cameras.main.shake(100);

        }

        if (Phaser.Geom.Intersects.RectangleToRectangle(this.shuttle.getBounds(), this.meteorFive.getBounds())) {
            this.cameras.main.shake(100);

        }


    }

</script>

</body>
</html>
