let res = document.getElementById("result")
// Підсистеми
class TV {
    turnOn() {
        res.innerHTML += "TV is turned on.<br>";
    }

    turnOff() {
        res.innerHTML += "TV is turned off.<br>";
    }
}

class SoundSystem {
    turnOn() {
        res.innerHTML += "Sound System is turned on.<br>";
    }

    turnOff() {
        res.innerHTML += "Sound System is turned off.<br>";
    }

    setVolume(level) {
        res.innerHTML += `Sound System volume set to ${level}.<br>`;
    }
}

class MediaPlayer {
    play() {
        res.innerHTML += "Media Player is playing. <br>";
    }

    stop() {
        res.innerHTML += "Media Player is stopped. <br>";
    }
}

// Фасад
class HomeTheaterFacade {
    constructor() {
        this.tv = new TV();
        this.soundSystem = new SoundSystem();
        this.mediaPlayer = new MediaPlayer();
    }

    watchMovie() {
        res.innerHTML += "Getting ready to watch a movie...<br>";
        this.tv.turnOn();
        this.soundSystem.turnOn();
        this.soundSystem.setVolume(50);
        this.mediaPlayer.play();
    }

    stopMovie() {
        res.innerHTML += "Stopping the movie...<br>"
        this.mediaPlayer.stop();
        this.soundSystem.turnOff();
        this.tv.turnOff();
    }
}

// Клієнтський код
const homeTheater = new HomeTheaterFacade();

// Дивимося фільм
document.getElementById("watch_movie").onclick = () => homeTheater.watchMovie();
/*
Output:
Getting ready to watch a movie...
TV is turned on.
Sound System is turned on.
Sound System volume set to 50.
Media Player is playing.
*/

// Зупиняємо фільм
document.getElementById("stop_movie").onclick = () => homeTheater.stopMovie();
/*
Output:
Stopping the movie...
Media Player is stopped.
Sound System is turned off.
TV is turned off.
*/
