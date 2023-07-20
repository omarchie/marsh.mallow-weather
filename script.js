//let API KEY - SCWe@th3r --scappoma
//let city = "Chicago";
//let placeCity = city;
//let apiKey = "cf51f823362250f0d4d0c4ca7ded036f";
//let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${placeCity}&units=metric`;

//function to get weather information for the location inputted
function displayTemperature(response){
console.log(response)
    let theCurrentTemp = Math.round(response.data.main.temp);
    let tempDisplay = document.getElementById("thecurrent-temp");
    tempDisplay.innerText = `${theCurrentTemp}º|C`;
    let description = document.getElementById("cloud-detail");
    let weatherDescrip = response.data.weather[0].description;
    description.innerText =`${weatherDescrip}`;
    let humidity = document.getElementById("humidity");
    humidity.innerText = "Humidity: " + response.data.main.humidity +"%";
    let country = response.data.sys.country;
  let countryDisplay = document.querySelector("#country");
  countryDisplay.innerText = `${country}`; 
let wind = Math.round(response.data.wind.speed);
let windSpeed = document.getElementById("wind");
windSpeed.innerText = `Wind: ${wind} km/h`;
let feels = Math.round(response.data.main.feels_like);
let feelsLike= document.getElementById("feels-like");
feelsLike.innerText = `Feels Like: ${feels}ºC`
    //axios.get(`${apiURL}&appid=${apiKey}`).then(displayTemperature);
}

function typeLocationStore(position)
 {
      let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
     let city = document.getElementById("location-input").value;
     let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(apiURL).then(displayTemperature);
}

function searchLocation(event)
 {
    event.preventDefault();
    typeLocationStore();
    let city = document.getElementById("location-input").value;
    let cityDisplay = document.querySelector("#current-location");
    cityDisplay.innerText = city;
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



//navigator.geolocation.getCurrentPosition(typeLocationStore);