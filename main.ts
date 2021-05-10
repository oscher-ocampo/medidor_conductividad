let conductividad = 0
let proporcionalidad = 0
basic.forever(function () {
    conductividad = pins.analogReadPin(AnalogPin.P2)
    proporcionalidad = pins.map(
    conductividad,
    0,
    1023,
    0,
    100
    )
    basic.showNumber(proporcionalidad)
})
