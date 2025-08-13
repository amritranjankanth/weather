const apikey = "755abbee07fa2799812ccd92523a2073";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404)
    {
     document.querySelector(".error").style.display = "block";
     document.querySelector(".weather").style.display = "none";
    }
    else{
      
        var data = await response.json();
    
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        let x = data.weather[0].main;
        if(x == "Clouds"){
            weathericon.src = "photos/clouds.png"; 
        }
        else if(x== "Clear")
         weathericon.src="photos/clear.png";
        else if(x == "Rain")
         weathericon.src = "photos/rain.png";
       else if(x == "Drizzle")
        weathericon.src = "photos/drizzle.png";
        else if(x == "Mist")
        weathericon.src = "photos/mist.png";
      
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
   

}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);

})
