// Старий інтерфейс
class OldAPI {
    constructor() {
        this.operations = function (a, b, operationType) {
            switch (operationType) {
                case "add":
                    return a + b;
                case "subtract":
                    return a - b;
                default:
                    return NaN;
            }
        };
    }
}

// Новий інтерфейс
class NewAPI {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }
}

// Адаптер
class Adapter {
    constructor() {
        this.newAPI = new NewAPI();
    }

    operations(a, b, operationType) {
        switch (operationType) {
            case "add":
                return this.newAPI.add(a, b);
            case "subtract":
                return this.newAPI.subtract(a, b);
            default:
                return NaN;
        }
    }
}
let res = document.getElementById('result')
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let old_api_button = document.getElementById("Old_API")
let adapter_button = document.getElementById("Adapter")

// Клієнтський код
function clientCode(api) {
    return "Result: <br> Add: " + api.operations(Number(num1.value), Number(num2.value), "add") + // Додає
    "<br>Subtract: "+ api.operations(Number(num1.value), Number(num2.value), "subtract"); // Віднімає
}

// Використання старого API
old_api_button.onclick = () => {
    const oldAPI = new OldAPI();
    res.innerHTML += "<br>Old API " + clientCode(oldAPI);
}


// Використання нового API через адаптер
adapter_button.onclick = () => {
    const adaptedAPI = new Adapter();
    res.innerHTML += "<br>Adapter " + clientCode(adaptedAPI);
}
