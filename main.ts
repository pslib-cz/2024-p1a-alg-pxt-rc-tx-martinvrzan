radio.setGroup(21)

basic.forever(function () {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)

    // Odesíláme hodnoty jako jediný řetězec "x:y"
    radio.sendString(x + ":" + y)

    basic.pause(50)
})
