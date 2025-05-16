radio.setGroup(22)
basic.forever(function () {
    let x = input.acceleration(Dimension.X); //vprav, vlevo
    let y = input.acceleration(Dimension.Y); //dopředu, dozadu
    radio.sendValue("x", x);
    radio.sendValue("y", y);
    basic.pause(50);
})

