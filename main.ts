basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.forever(function () {
    lcd.displayText(lcd.Address.add39, "MakerEDU", 1, 1)
    lcd.displayText(lcd.Address.add39, "" + dht11.readTemperature(DigitalPin.P8, dht11.TemperatureType.Celsius), 1, 2)
    basic.pause(100)
})
