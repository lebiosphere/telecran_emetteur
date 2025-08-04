input.onGesture(Gesture.Shake, function () {
    serial.writeLine("efface")
})
let message = ""
let dy = ""
let dx = ""
basic.showLeds(`
    # # # # #
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
radio.setGroup(197)
serial.redirectToUSB()
let oldMessage = "X0000Y0000"
basic.forever(function () {
    basic.pause(50)
    dx = convertToText(Math.round(input.compassHeading()))
    while (dx.length < 4) {
        dx = "0" + dx
    }
    dy = convertToText(Math.round(143.5))
    while (dy.length < 4) {
        dy = "0" + dy
    }
    message = "X" + dx + "Y" + dy
    if (message != oldMessage) {
        oldMessage = message
        serial.writeLine(message)
    }
})
