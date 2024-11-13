const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById("current-year").textContent = currentYear;
document.getElementById("last-modified").textContent = lastModified;


const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

function displayWindChill() {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("wind-chill").textContent = `${windChill.toFixed(2)}°C`;
    } else {
        document.getElementById("wind-chill").textContent = "N/A";
    }
}

window.addEventListener("load", displayWindChill);
