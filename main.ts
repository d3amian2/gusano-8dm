let DISTNCIA = 0
basic.showString("Hello!")
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    DISTNCIA = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if (DISTNCIA < 10) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 70)
    } else {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 90)
    }
})
