radio.setGroup(21)

basic.forever(function () {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)

    
    radio.sendString(x + ":" + y)

    basic.pause(50)
})
