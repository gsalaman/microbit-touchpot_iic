function calc_delay (num: number) {
    if (number < 2) {
        delay = 1000
    } else if (number < 4) {
        delay = 500
    } else if (number < 8) {
        delay = 200
    } else if (number < 16) {
        delay = 100
    } else if (number < 32) {
        delay = 50
    } else if (number < 64) {
        delay = 25
    } else if (number < 128) {
        delay = 10
    } else {
        delay = 5
    }
    return delay
}
let delay = 0
let number = 0
let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
strip.show()
basic.forever(function () {
    pins.i2cWriteNumber(
    9,
    71,
    NumberFormat.UInt8LE,
    false
    )
    number = pins.i2cReadNumber(9, NumberFormat.UInt8LE, false)
    strip.rotate(1)
    strip.show()
    calc_delay(number)
    basic.pause(delay)
})
