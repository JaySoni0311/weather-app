const apiKey = "76dae7377b4be70e6b5c8e837f1a0a72"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

let weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404 ) {

        alert("Enter valid city name");
        document.querySelector(".weather").style.display="none";

       


    }
    if(searchBox.value.length == 0){
        alert("Enter city name");

        document.querySelector(".weather").style.display="none";

    }


    var data = await response.json();

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";


    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";

    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";


    }

    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";

    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";

    }

    document.querySelector(".weather").style.display="block";

    

}


function cityName() {
    checkWeather(searchBox.value);


}

searchBox.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        document.getElementById("searchBtn").click();
    }
} )