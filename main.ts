input.onButtonPressed(Button.A, function () {
    basic.showString("B TO SHOOT")
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # . . . #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    amountofammo += -1
    basic.showNumber(amountofammo)
    basic.showString("AMMO")
    basic.showLeds(`
        . . . . .
        # . . . .
        # # # . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # . . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # # . .
        # . . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . # .
        # . . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . # .
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . #
        # . . . #
        # . . . #
        `)
})
let amountofammo = 0
amountofammo = 30
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    . # . # .
    . # . # .
    `)
basic.showString("PEX LEGENDS")
basic.showNumber(amountofammo)
basic.showString("AMMO")
basic.showString("A TO CONTINUE")
