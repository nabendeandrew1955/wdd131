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








// 'use strict'
// // A collection of functions for the weather site
// document.addEventListener("DOMContentLoaded", function () {
//     // call the modified date function
//     buildModeDate();
//     // work with the small screen menu
//     const menuButton = querySelector("#menubtn");
//     menuButton.addEventListener('click', menuButton);
//     // use the wind chill function
//     let speed = 25;
//     let temp = 25;
//     buildWC(speed, temp)
// });

// // Builds the last modified date
// function buildModeDate() {
//     const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const monthArray = ["January" "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let lastmod = new Date(document.lastModified);
//     const dayName = dayArray[lastmod.getDay()];
//     const monthName = monthArray[lastmod.getMonth()];
//     const formattedDate = dayName + ", " + lastmod.getDate() + " " + monthName + ", " + lastmod.getFullYear();
//     document.querySelector('#modDate').innerText = formattedDate;
// }

// function mobileMenu(event) {
//     const navList = $('#navList');
//     navList.classList.toggle("mobileNav");
// }
// //calculate the windchill temperature
// function buidWC(speed, temp) {
//     let feel Temp = document.getElementById('feelTemp')
//     let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * math * pow(speed, 0.16);
//     console.log(wc);
//     wc = math.floor(wc);
//     console.log(wc);
//  }







// // select the DOM elements for output
// const full = document.querySelector("#full");
// const worldfull = document.querySelector("#world-full");
// const short = document.querySelector("#short");
// const medium = document.querySelector("#medium");
// const year = document.querySelector("#year");
// const month = document.querySelector("#month");
// const day = document.querySelector("#day");
// const dayofweek = document.querySelector("#dayofweek");

// // use the date object
// const today = new Date();

// full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
//     "en-US",
//     {
//         dateStyle: "full"
//     }
// ).format(today)}</span>`;
// worldfull.innerHTML = `UK: <span class="highlight">${new Intl.DateTimeFormat(
//     "en-UK",
//     {
//         dateStyle: "full"
//     }
// ).format(today)}</span>`;
// short.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat(
//     "en-US",
//     {
//         dateStyle: "short"
//     }
// ).format(today)}</span>`;
// medium.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat(
//     "en-US",
//     {
//         dateStyle: "medium"
//     }
// ).format(today)}</span>`;

// year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;
// month.innerHTML = `getMonth(): <span class="highlight">${today.getMonth()}</span>`;
// day.innerHTML = `getDate(): <span class="highlight">${today.getDate()}</span>`;
// dayofweek.innerHTML = `getDay(): <span class="highlight">${today.getDay()}</span>`;



// /**
//  * Calculates Wind Chill in Celsius
//  * @param {number} temp - Air temperature in Celsius
//  * @param {number} windSpeed - Wind speed in km/h
//  * @returns {number} The calculated wind chill factor
//  */
// function calculateWindChillCelsius(temp, windSpeed) {
//     // Formula is only valid for temperatures <= 10°C and wind speeds > 4.8 km/h
//     if (temp > 10 || windSpeed <= 4.8) {
//         return temp;
//     }

//     const v016 = Math.pow(windSpeed, 0.16);
//     const windChill = 13.12 + (0.6215 * temp) - (11.37 * v016) + (0.3965 * temp * v016);

//     return Math.round(windChill * 10) / 10; // Round to 1 decimal place
// }

// // Example usage:
// const currentTemp = -10; // -10°C
// const currentWind = 20;  // 20 km/h
// console.log(`Wind Chill: ${calculateWindChillCelsius(currentTemp, currentWind)}°C`);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


