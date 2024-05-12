def calc_delay(num: number):
    global delay
    if number < 2:
        delay = 1000
    elif number < 4:
        delay = 500
    elif number < 8:
        delay = 200
    elif number < 16:
        delay = 100
    elif number < 32:
        delay = 50
    elif number < 64:
        delay = 25
    elif number < 128:
        delay = 10
    else:
        delay = 5
    return delay
delay = 0
number = 0
strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
strip.show_color(neopixel.colors(NeoPixelColors.RED))
strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.BLUE))
strip.show()

def on_forever():
    global number
    pins.i2c_write_number(9, 71, NumberFormat.UINT8_LE, False)
    number = pins.i2c_read_number(9, NumberFormat.UINT8_LE, False)
    strip.rotate(1)
    strip.show()
    calc_delay(number)
    basic.pause(delay)
basic.forever(on_forever)
