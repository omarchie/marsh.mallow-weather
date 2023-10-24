//let API KEY - SCWe@th3r --scappoma
//let city = "Chicago";
//let placeCity = city;
//let apiKey = "cf51f823362250f0d4d0c4ca7ded036f";
//let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${placeCity}&units=metric`;

//function to get weather information for the location inputted
function getCityLocationInfo(coordinates)
{
  console.log(coordinates);
  let apiKey = "c819171fe0abdc14039af4ef5dda283b";
  //let apiURL = `api.openweathermap.org/data/2.5/forecast/daily?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  let apiURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiURL);
  axios.get(apiURL).then(displayTemperature);
}

//This function is getting the coordinates so that we can display the temperature for the 
//next few days

function displayTemperature(response)
  {
    console.log(response)
    let theCurrentTemp = Math.round(response.data.main.temp);
    let tempDisplay = document.getElementById("thecurrent-temp");
    tempDisplay.innerText = `${theCurrentTemp}ºC`;
    let description = document.getElementById("cloud-detail");
    let humidity = document.querySelector(".wind-percip li#humidity");
    humidity.innerText = "Humidity : " + response.data.main.humidity +"%";
    let country = response.data.sys.country;
    let countryDisplay = document.querySelector("#country");
    countryDisplay.innerText = `${country}`; 
    let wind = Math.round(response.data.wind.speed);
    let windSpeed = document.getElementById("wind");
    windSpeed.innerText = `Wind: ${wind} km/h`;
    let feels = Math.round(response.data.main.feels_like);
    let feelsLike= document.getElementById("feels-like");
    feelsLike.innerText = `Feels Like: ${feels}ºC`;
    let iconImage = document.querySelector("#weather-icon");
    iconImage.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`);
    //let lat = response.data.coord.lat;
    //axios.get(`${apiURL}&appid=${apiKey}`).then(displayTemperature);

    getCityLocationInfo(response.data.coord);
    //this calls the function to grab the coordinates
  }


function typeLocationStore(position)
 {
    //console.log(position);
    let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
    let city = document.getElementById("location-input").value;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    axios.get(apiURL).then(displayTemperature);
}
//this function is getting the "Current Temperature for the inputted City"
function displayForecast() { 

let forecastInfo = document.querySelector("#forecast-info");

  let days = ["Sun", "Mon", "Tues", "Wed"];

      let forecastHTMLValue = `<div class="row">`;

      days.forEach(function (day) {
      forecastHTMLValue  = forecastHTMLValue  +
      
       `
          <div class="col-2">
          <div class="pic-forecast"> ☀ </div>
          <div class= "weather-five-day"> ${day}</div>
          <div class="temp-days-forecast">  
               <span class="weather-forecast-temp-max"> 20ºC</span>
                <span class="weather-forecast-temp-min"> 10ºC</span>
          </div>
          </div>
       `;
});
//concatenate the the HTML so  that you can create a row
forecastHTMLValue = forecastHTMLValue + `</div>`;
forecastInfo.innerHTML = forecastHTMLValue;

}
function searchLocation(event)
 {
    event.preventDefault();
    typeLocationStore();
    let city = document.getElementById("location-input").value;
    let cityDisplay = document.querySelector("#current-location");
    cityDisplay.innerText = city.toUpperCase();
}

let inputSubmission = document.getElementById("search-form");
inputSubmission.addEventListener("submit", searchLocation);

//This is getting the current date.
let today = new Date();
//the current time
let hours = today.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = today.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let time = `${hours}:${minutes}`;

//convert to non-24 hour clock time

//we need the day
let weekDays = 
[
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = weekDays[today.getDay()];
//we need month
let monthofYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
let month = monthofYear[today.getMonth()];

//we need the date
let date = today.getDate();

//we need the year
let year = today.getFullYear();

//now let's put it all  together so it is legible
let weatherDate = document.querySelector(".list-date-condition li#currentdate");
weatherDate.innerText = `${day}, ${month} ${date} ${year} - ${time}`;

//Creating a function that will store the input of the form and display it. 


//Retrieve the city inputted to get the city for the weather 


displayForecast();
//navigator.geolocation.getCurrentPosition(typeLocationStore);