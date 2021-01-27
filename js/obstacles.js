class Obstacles {
    constructor(ctx, canvasSize, posX, posY, width, height, speed, image) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstaclePos = {x: posX, y: posY}
        this.obstacleSize = {w: width, h: height}
        this.speed = 5
        this.imageName = `swords.png`
        this.obstacleInstance = new Image()
        this.obstacleInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.obstacleInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    move() {
        this.obstaclePos.x -= this.speed
    }
}

// class Swords extends Obstacles {
//     constructor (posX, posY, width, height) {
//         super()
//         this.swordsPos = {x: posX, y: posY}
//         this.swordsSize = {w: width, h: height}
//         this.speed = 5
//         this.imageName = `swords.png`
//         this.swordInstance = new Image()
//         this.swordInstance.src = `images/${this.imageName}`
//     }

//     draw() {
//         this.ctx.drawImage(this.swordInstance, this.swordPos.x, this.swordPos.y, this.swordSize.w, this.swordSize.h)
//     }

//     move() {
//         this.swordPos.x -= this.speed
//     }
    
// }
