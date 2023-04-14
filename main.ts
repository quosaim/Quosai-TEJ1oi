basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
