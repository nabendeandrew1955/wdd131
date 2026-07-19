/*Get Dates*/
let day = new Date();
document.getElementById("year").innerHTML = `&copy; ${day.getFullYear()}`;

document.querySelector("#lastmodified").textContent = `lastmodification: ${document.lastModified}`;

/*Weather Conditions*/

let temperature = 26.1111;
let windSpeed = 9;

let windChill;

const calculateWindChill = (t, s) => 35.74 + (0.6215 * t) - 35.75 * Math.pow(s, 0.16) + (0.4275 * t * Math.pow(s, 0.16));

if (temperature <= 50 && windSpeed > 3) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + "°F"
}
else {
    windChill = "N/A"
};

document.getElementById("wind-chill").textContent = windChill;


