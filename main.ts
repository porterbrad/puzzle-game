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
    while (mySprite.overlapsWith(mySprite3)) {
        music.stopAllSounds()
        music.play(music.createSong(hex`00a0000408040200001c00010a006400f4016400000400000000000000000000000000050000047d00000008000305082a08000c0001270c00140001271800200003050a2720002400012924002c0001252c003000011b300038000305081938004000012940004800012748004c000212275000580003050a2758005c0001295c0060000125600068000119680070000119700078000305081d78007c0001207c008000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8007f0000000100020e080800090001060c000d00020e0618001900020e0620002100010724002500020e052c002d00010430003100020e0438003900010740004100020e0648004900020f0650005100020e06580059000206075c005d00010560006100030e02036800690002020370007100020e037800790001067c007d000106`), music.PlaybackMode.LoopingInBackground)
    }
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
let mySprite3: Sprite = null
let mySprite: Sprite = null
music.stopAllSounds()
music.play(music.createSong(hex`00c8000408040305001c000f0a006400f4010a0000040000000000000000000000000000000002490000000c00011d0c001800011b18002000011b20002800011d2800300002191b30003800011d38004000011b44004800011b6c007000012070007400012078007c0001207c008000012007001c00020a006400f4016400000400000000000000000000000000000000038b0000000c0002242c0c00180002222a1800200002222a2000280002242c2800300002222a3000380002242c3800440002222944004800012248004c00021d244c005000021d2450005400021e2554005800021b2058005c00021d225c006000021d2260006400021e2464006800021e2468006c0002191e6c00700002191e7400780002191e78007c0002191e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800b900000001000206080400050001060c000d000206081000110001061800190001061c001d000106200021000206082400250001062800290001082c002d0004050607083000310001063400350001083800390001073c003d000402050708400041000203054400450004030506074800490001084c004d0001085000510001055400550004030506075800590001075c005d0001076400650001086c006d000106700071000106740075000103780079000205067c007d000106`), music.PlaybackMode.LoopingInBackground)
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
mySprite3 = sprites.create(img`
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
tiles.placeOnTile(mySprite3, tiles.getTileLocation(15, 40))
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
