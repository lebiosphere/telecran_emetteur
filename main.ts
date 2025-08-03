radio.setGroup(197)
serial.redirectToUSB()
let dx = 0
let dy = 0
basic.forever(function () {
    basic.pause(50)
    serial.writeValue("dx", dx)
    serial.writeValue("dy", dy)
    serial.writeLine("")
})
