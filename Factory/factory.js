// Базовий клас Транспорту
class Transport {
    deliver() {
        throw new Error("Method 'deliver()' must be implemented.");
    }
}

// Клас для транспортування по суші
class Truck extends Transport {
    deliver() {
        return "Delivery by Truck on the road.";
    }
}

// Клас для транспортування по морю
class Ship extends Transport {
    deliver() {
        return "Delivery by Ship across the sea.";
    }
}

// Фабрика для створення об'єктів транспорту
class TransportFactory {
    static createTransport(type) {
        switch (type) {
            case "truck":
                return new Truck();
            case "ship":
                return new Ship();
            default:
                throw new Error("Invalid transport type.");
        }
    }
}
let res = document.getElementById('result')
let createTruck = document.getElementById('createTruck')
let createShip = document.getElementById('createShip')
// Використання фабрики
createTruck.onclick = () =>{
    const truck = TransportFactory.createTransport("truck");
    res.innerHTML += truck.deliver() + "<br>"; // "Delivery by Truck on the road."
}
createShip.onclick = () => {
    const ship = TransportFactory.createTransport("ship");
    res.innerHTML += ship.deliver() + "<br>"; // "Delivery by Ship across the sea."
}
