let input = document.querySelector(".input");
let searchBtn = document.querySelector(".search");
let weatherImg = document.querySelector(".weatherImg");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");
let humidity = document.querySelector(".humid-details");
let wind_speed = document.querySelector(".wind-details");

let locationNotFound = document.querySelector('.location-not-found');
let weatherDetails  = document.querySelector('.weather-details');
let weatherContainer  = document.querySelector('.weather-container');



searchBtn.addEventListener("click",()=>{
    checkWeather(input.value);
});

 async function checkWeather(city){
    
    const api_key="f17d9fbcc7bde4421e7bfce4c8627e29";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=matric`;

    const weather_data = await fetch(url).then(response=>response.json())

    if(weather_data.cod === "404"){
        locationNotFound.style.display="flex";
        weatherImg.style.display="none";
        weatherDetails.style.display="none";
        weatherContainer.style.display="none";
        
        return;
    }
    // console.log(weather_data);
    temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds': weatherImg.src = "./images/cloud.png";
        break;
        case 'Rain': weatherImg.src = "./images/rain.png";
        break;
        case 'Mist': weatherImg.src = "./images/mist.png";
        break;
        case 'Clear': weatherImg.src = "./images/clear.png";
        break;
        case 'Snow': weatherImg.src = "./images/snow.png";
        break;
    }


}