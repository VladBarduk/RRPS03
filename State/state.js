let res = document.getElementById("result")

// Стан: Відчинені
class OpenState {
    open(door) {
        res.innerHTML += "The door is already open.<br>";
    }

    close(door) {
        res.innerHTML += "Closing the door...<br>";
        door.setState(new ClosedState());
    }

    lock(door) {
        res.innerHTML += "Cannot lock the door while it's open.<br>";
    }
}

// Стан: Зачинені
class ClosedState {
    open(door) {
        res.innerHTML += "Opening the door...<br>";
        door.setState(new OpenState());
    }

    close(door) {
        res.innerHTML += "The door is already closed.<br>";
    }

    lock(door) {
        res.innerHTML += "Locking the door...<br>";
        door.setState(new LockedState());
    }
}

// Стан: Заблоковані
class LockedState {
    open(door) {
        res.innerHTML += "Cannot open the door. It's locked.<br>";
    }

    close(door) {
        res.innerHTML += "The door is already closed and locked.<br>";
    }

    lock(door) {
        res.innerHTML += "The door is already locked.<br>";
    }
}

// Клас Двері (контекст)
class Door {
    constructor() {
        this.state = new ClosedState(); // Початковий стан дверей
    }

    setState(state) {
        this.state = state;
    }

    open() {
        this.state.open(this);
    }

    close() {
        this.state.close(this);
    }

    lock() {
        this.state.lock(this);
    }
}

// Використання
const door = new Door();

document.getElementById('open').onclick = () => door.open();
document.getElementById('lock').onclick = () => door.lock();
document.getElementById('close').onclick = () => door.close();

