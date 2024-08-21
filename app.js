const apiKey = '0ef6de6fa9e9a1ced69425cbd529d806';
        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

        const searchBox = document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button')
        const errorMesg = document.querySelector(".error");
        const weatherData = document.querySelector(".weather");
        const weatherIcon = document.querySelector('.weather-icon');
        const City = document.querySelector('.city');
        const Temp = document.querySelector('.temp');
        const feelsLike = document.querySelector('.feels_like');
        const Humidity = document.querySelector('.humidity');
        const Wind = document.querySelector('.wind');

        async function checkWeather(cityName) {
            const response = await fetch(baseUrl + cityName + `&appid=${apiKey}`);
            if(response.status == 404){
                errorMesg.style.display = "block"
                weatherData.style.display = "none"
            }else{
                errorMesg.style.display = "none"
                var data = await response.json();
            // selecting html elements to update in realtime
            City.innerHTML = data.name;
            Temp.innerHTML = Math.round(data.main.temp) + "°c";
            feelsLike.innerHTML = Math.round(data.main.feels_like) + "°c";
            Humidity.innerHTML = data.main.humidity + "%";
            Wind.innerHTML = data.wind.speed + " km/h";
            weatherData.style.display = "block"

            if(data.weather[0].main === "Clear"){
                weatherIcon.src = './images/clear.png'
            }else if(data.weather[0].main === "Clouds"){
                weatherIcon.src = './images/clouds.png'
            }else if(data.weather[0].main === "Drrizle"){
                weatherIcon.src = './images/drizzle.png'
            }else if(data.weather[0].main === "Mist"){
                weatherIcon.src = './images/mist.png'
            }else if(data.weather[0].main === "Rain"){
                weatherIcon.src = './images/rain.png'
            }else if(data.weather[0].main === "Snow"){
                weatherIcon.src = './images/snow.png'
            }

            }
            
            
        }

        searchBox.addEventListener('keydown',(e)=>{
            if(e.key === "Enter"){
                checkWeather(searchBox.value)
            }
        })
        searchBtn.addEventListener('click',()=>{
            checkWeather(searchBox.value)
        })