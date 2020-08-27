class Dog {
    constructor (name, breed) {
        this.name = name
        this.breed = breed
        this.isGoodBoy = true
    }
    sit () {
        // sitting code goes here
    }   
    fetch () {
        // fetching code goes here
    }   
}
// create an instance of the Dog class
const fluffy = new Dog("Fluffy", "Toy Poodle")

class Traveler {
    constructor (name, food, isHealthy) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food += 2
    }
    eat () {
        if (this.food > 0) {
            this.food -= 1
        } else {
            this.isHealthy = false
        }
    }
}

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if (this.getAvailableSeatCount()>= 1) {
            this.passengers.push(traveler)
        } else {
            console.log("ThErEs No RoOm!")
        }
    }
    shouldQuarantine() {
        const healthy = this.passengers.some(user => user.isHealthy === false)
        return healthy
    }
    totalFood() {
        let foodTotal = 0
        for (let index = 0; index < this.passengers.length; index++) {
            const person = this.passengers[index];
            foodTotal += person.food
        }
        return foodTotal
    }
}








