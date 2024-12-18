class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance; // Повертаємо вже існуючий екземпляр
        }
        Singleton.instance = this; // Зберігаємо новий екземпляр
        this.data = "I am the Singleton instance"; // Деякі дані в екземплярі
    }

    // Метод для доступу до даних
    getData() {
        return this.data;
    }

    // Метод для зміни даних
    setData(newData) {
        this.data = newData;
    }
}

let res = document.getElementById('result')
let create = document.getElementById('createButton')
let counter = 1
// Створювання екземплярів

create.onclick = () =>{
    const singleton = new Singleton();
    res.innerHTML += "Singleton " + counter.toString() + ": " + singleton.getData() + "<br>"
    counter += 1
}


