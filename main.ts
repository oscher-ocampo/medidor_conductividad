input.onButtonPressed(Button.A, function () {
    conteo_conductividad += 1
    sumatoria_conductividad = sumatoria_conductividad + proporcionalidad
    promedio_conectividad = sumatoria_conductividad / conteo_conductividad
    basic.showNumber(promedio_conectividad)
})
let conductividad = 0
let proporcionalidad = 0
let promedio_conectividad = 0
let sumatoria_conductividad = 0
let conteo_conductividad = 0
conteo_conductividad = 0
sumatoria_conductividad = 0
promedio_conectividad = 0
basic.forever(function () {
    conductividad = pins.analogReadPin(AnalogPin.P2)
    proporcionalidad = pins.map(
    conductividad,
    0,
    1023,
    0,
    100
    )
})
