/**
 * A test block.
 */
//% color=190 weight=100 icon="\uf1ec" block="Control" advanced=true
namespace basic {
    CustomBlock
}
forever(function () {
    if ((Math.random)) {
        music.playSoundEffectUntilDone(sounds.systemConfirm)
    }
})