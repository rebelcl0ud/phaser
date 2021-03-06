// https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Image.html
export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		// what it is | where it is
	// 	this.load.image('star', '/assets/img/star.png');
	// 	this.load.spritesheet('dude', '/assets/img/dude.png', {
	// 		frameWidth: 32, 
	// 		frameHeight: 48
	// 	})
	// 	// scene.load.atlas(key, textureURL, atlasURL);
	// 	this.load.atlas({
	// 		key: 'char_sprites',
	// 		textureURL: '/assets/img/atlas_sprites/sprites.png',
	// 		atlasURL: '/assets/img/atlas_sprites/sprites.json'
	// 	})

	// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/#script
	// scene.load.script(key, url);
		this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js')
 	} // end preload()

	create() {
	// 	// x | y | what it is (key; name of file)

	// 	// - - - image - - -
	// 	this.star = this.add.image(80, 200, 'star').setScale(1, 1);

	// 	// - - - sprite - - -
	// 	this.dude = this.add.sprite(200, 250, 'dude', 3).setScale(3, 3);
	// 	this.anims.create({
	// 		key: 'left', 
	// 		frames: this.anims.generateFrameNumbers('dude', {
	// 			start: 0,
	// 			end: 3
	// 		}),
	// 		frameRate: 5,
	// 		// -1 in infinite
	// 		repeat: 1
	// 	})
	// 	// sprite.anims.play(key, ignoreIfPlaying, startFrame);
	// 	this.dude.anims.play('left', true)

	// 	// - - - ATLAS SPRITE - - -
	// 	this.boi = this.add.sprite(100, 300, 'char_sprites', 'jacen1.png').setScale(2, 2);
		
	// 	const frameNames = [
	// 		{key: 'char_sprites', frame: 'jacen2.png'},
	// 		{key: 'char_sprites', frame: 'jacen3.png'},
	// 		{key: 'char_sprites', frame: 'jacen4.png'},
	// 		{key: 'char_sprites', frame: 'jacen5.png'},
	// 	]
	// 	this.anims.create({
	// 		key: 'leftboi',
	// 		frames: frameNames,
	// 		frameRate: 5,
	// 		repeat: 1
	// 	})
	// 	// if need other direction when sprite only has '1'
	// 	this.boi.flipX = true;
	// 	this.boi.anims.play('leftboi', true)

	// - - - SHAPES - - -
	// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shape-rectangle/
		// this.rectangle = this.add.rectangle(100, 300, 50, 50, 0xFF0000)
		// this.rectangle.setStrokeStyle(2, 0xFF0000, 1)

		// this.starry = this.add.star(100, 250, 5, 32, 64, 0xFFC0CB)
		// this.starry.setStrokeStyle(1, 0xFFC0CB, 1)

		this.txtHere = this.add.text(300, 50, 'testing...', {
	    fontFamily: 'Arial',
	    fontSize: '64px',
	    fontStyle: '',
	    backgroundColor: null,
	    color: '#00ff00',
	    stroke: '#fff',
	    strokeThickness: 0,
	    shadow: {
	        offsetX: 0,
	        offsetY: 0,
	        color: '#000',
	        blur: 0,
	        stroke: false,
	        fill: false
	    },
	    align: 'left',  // 'left'|'center'|'right'
	    maxLines: 0,
	    fixedWidth: 0,
	    fixedHeight: 0,
	    rtl: false,
	    testString: '|MÉqgy',
	    wordWrap: {
	        width: null,
	        callback: null,
	        callbackScope: null,
	        useAdvancedWrap: false
	    },
	    // resolution: 1
		})
		WebFont.load({
    google: {
      families: ['Fredericka the Great']
    }, 
    active: () => {
    	this.add
    		.text(25, 150, `Using Google Fonts, w00t`, {
    			fontFamily: 'Fredericka the Great',
	    		fontSize: 50,
	    		color: '#ffffff'
    		})
    		.setShadow(2, 2, '#333333', 2, false, true);
    	}
		});

		// if we were to update txtHere, count for purpose of showing update
		this.txtHere.setText('...')
		this.count = 0;
	} // end create()
	update(time, delta) {
		this.txtHere.setText('...' + this.count)
		this.count +=1;
	}
} // end export
