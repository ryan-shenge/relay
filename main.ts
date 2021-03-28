function 腳位歸零 () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
}
input.onButtonPressed(Button.A, function () {
    if (btn_A == 0) {
        basic.showIcon(IconNames.SmallSquare)
        pins.digitalWritePin(DigitalPin.P0, 0)
        btn_A = 1
    } else {
        basic.showIcon(IconNames.Square)
        pins.digitalWritePin(DigitalPin.P0, 1)
        btn_A = 0
    }
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function () {
    if (btn_C == 0) {
        basic.showIcon(IconNames.Giraffe)
        pins.digitalWritePin(DigitalPin.P2, 1)
        btn_C = 1
    } else {
        basic.showIcon(IconNames.Cow)
        pins.digitalWritePin(DigitalPin.P2, 0)
        btn_C = 0
    }
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    if (btn_B == 0) {
        basic.showIcon(IconNames.SmallHeart)
        pins.digitalWritePin(DigitalPin.P1, 0)
        btn_B = 1
    } else {
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P1, 1)
        btn_B = 0
    }
    basic.pause(200)
})
let btn_C = 0
let btn_B = 0
let btn_A = 0
btn_A = 0
btn_B = 0
btn_C = 0
basic.forever(function () {
	
})
