input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("great!")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("hi!")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("good!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("how are you doing?")
})
radio.setGroup(1)
