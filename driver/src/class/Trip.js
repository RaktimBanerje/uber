export class Trip {
    constructor(origin = undefined, destination = undefined, distance = undefined, duration = undefined, schedule = undefined, carType = undefined, price = undefined) {
        this.id = Date.now()
        this.origin = origin
        this.destination = destination
        this.distance = distance,
        this.duration = duration,
        this.schedule = schedule
        this.carType = carType,
        this.price = price
    }
}