/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maryam Ergen
 * Created on: Nov 14
 * This program shares code via bluetooth
*/

// variables
let distanceToObject: number

// setup
radio.setGroup(133)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // checking the distance
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // sending the string
    if (distanceToObject <= 10) {
        basic.showIcon(IconNames.No)
        radio.sendString("Too close")
        basic.showIcon(IconNames.Happy)
    }
})

// receiving the string
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})

