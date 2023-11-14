const countDownDate = new Date('2023-11-14T23:59:59');

function updateCountdown() {
    const now = new Date();
    const timeDifference = countDownDate - now;

    if (timeDifference <= 0) {
        document.getElementById('countdown').innerHTML = 'Countdown expired!';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

setInterval(updateCountdown, 1000);

updateCountdown();