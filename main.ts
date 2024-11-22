enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Bucket = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (EnterHouse() >= 1) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 50))
        scaling.scaleByPixels(mySprite, 10, ScaleDirection.Vertically, ScaleAnchor.Middle)
    } else {
        mySprite.sayText("I can't get in")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    animation.runImageAnimation(
    mySprite,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddd..............
        ............ddddddd.............
        ............df1df1d.............
        ............df1df1d.............
        ............ddddddd.............
        ............ddffddd.............
        .............ddddd..............
        ............4444444.............
        ............4444444.............
        ............d44444d.............
        ............d44444d.............
        ............d44444d.............
        ............d44444d.............
        .............88888..............
        .............88888..............
        .............8...8..............
        .............8...8..............
        .............8...8..............
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddd..............
        ............ddddddd.............
        ............d1fd1fd.............
        ............dffdffd.............
        ............ddddddd.............
        ............ddfffdd.............
        .............ddddd..............
        ............4444444.............
        ............4444444.............
        ............d44444d.............
        ............d44444d.............
        ............d44444d.............
        ............d44444d.............
        .............88888..............
        .............88888..............
        .............8...8..............
        .............8...8..............
        .............8...8..............
        `],
    2000,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bucket, function (sprite, otherSprite) {
    fishingRod = true
    mySprite.sayText("I got a fishing rod.", 500, true)
})
function collectKey (Key: boolean) {
    if (true) {
        mySprite.sayText("I found a key.", 500, true)
        Homekey = true
    }
}
function EnterHouse () {
    if (Homekey == true) {
        return randint(0, 10)
    } else {
        return 0
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    animation.runImageAnimation(
    mySprite,
    [img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddd..............
        ............ddddddd.............
        ............dffdffd.............
        ............df1d1fd.............
        ............ddddddd.............
        ............ddffddd.............
        .............ddddd..............
        ............4444444.............
        ............4444444.............
        ............d44444d.............
        ............d44444d.............
        ............d44444d.............
        ............d44444d.............
        .............88888..............
        .............88888..............
        .............8...8..............
        .............8...8..............
        .............8...8..............
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .............ddddd..............
        ............ddddddd.............
        ............d1fdf1d.............
        ............d1fdf1d.............
        ............ddddddd.............
        ............ddfffdd.............
        .............ddddd..............
        ............4444444.............
        ............4444444.............
        ............d44444d.............
        ............d44444d.............
        ............d44444d.............
        ............d44444d.............
        .............88888..............
        .............88888..............
        .............8...8..............
        .............8...8..............
        .............8...8..............
        `],
    2000,
    true
    )
    if (fishingRod == true) {
        collectKey(true)
    }
})
let Homekey = false
let fishingRod = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............ddddd.............
    .............ddddddd............
    .............df1df1d............
    .............df1df1d............
    .............ddddddd............
    .............ddffddd............
    ..............ddddd.............
    .............4444444............
    .............4444444............
    .............d44444d............
    .............d44444d............
    .............d44444d............
    .............d44444d............
    ..............88888.............
    ..............88888.............
    ..............8...8.............
    ..............8...8.............
    ..............8...8.............
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b . . . . . 
    . . . . . . . . . b . b . . . . 
    . . . . . . . . b . . . 1 . . . 
    . . . . . . . b . . . . 2 . . . 
    . . . . . . b . . . . . . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . e c e c e c e . . . . 
    . . . . . e c e c e c e . . . . 
    . . . . . e c e c e c e . . . . 
    . . . . . e e e e e e e . . . . 
    `, SpriteKind.Bucket)
let mySprite3 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............ddddd.............
    .............ddddddd............
    .............df1df1d............
    .............df1df1d............
    .............ddddddd............
    .............ddffddd............
    ..............ddddd.............
    .............9999999............
    .............9999999............
    .............d99999d............
    .............d99999d............
    .............d99999d............
    .............d99999d............
    ..............88888.............
    ..............88888.............
    ..............8...8.............
    ..............8...8.............
    ..............8...8.............
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(25, 10))
tiles.placeOnTile(mySprite3, tiles.getTileLocation(15, 45))
animation.runImageAnimation(
mySprite,
[img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    .............ddddd..............
    ............ddddddd.............
    ............df1df1d.............
    ............df1df1d.............
    ............ddddddd.............
    ............ddffddd.............
    .............ddddd..............
    ............4444444.............
    ............4444444.............
    ............d44444d.............
    ............d44444d.............
    ............d44444d.............
    ............d44444d.............
    .............88888..............
    .............88888..............
    .............8...8..............
    .............8...8..............
    .............8...8..............
    `,img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    .............ddddd..............
    ............ddddddd.............
    ............d1fd1fd.............
    ............dffdffd.............
    ............ddddddd.............
    ............ddfffdd.............
    .............ddddd..............
    ............4444444.............
    ............4444444.............
    ............d44444d.............
    ............d44444d.............
    ............d44444d.............
    ............d44444d.............
    .............88888..............
    .............88888..............
    .............8...8..............
    .............8...8..............
    .............8...8..............
    `],
2000,
true
)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
