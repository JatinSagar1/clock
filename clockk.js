function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const smoothSeconds = seconds + milliseconds / 1000;

    document.querySelector('.hour').style.transform = `translate(-50%, -100%) rotate(${(hours * 30) + (minutes * 0.5)}deg)`;
    document.querySelector('.minute').style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`;
    document.querySelector('.second').style.transform = `translate(-50%, -100%) rotate(${smoothSeconds * 6}deg)`;
}

setInterval(updateClock, 50);
updateClock();