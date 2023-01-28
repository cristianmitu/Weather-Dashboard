let searchInput = document.querySelector("#search-input");  //user search input
let searchBtn = document.querySelector("#search-button");
let historyBtns = document.querySelector("#history"); //history of user search input create a btn for each search
let searchedCity = "";
// console.log(searchedCity);
let iconSRC = " http://openweathermap.org/img/wn/10d@2x.png"; // ${iconCode}

searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    let searchedCity = searchInput.value;     
    console.log(searchedCity);
    let geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=5&appid=db16dbee3bd66f2711c9afeee99393d6`;
    
    //trebuiesc inserate in event si cityLat si cityLon trebuiesc bagate in local storage
    fetch(geoURL)
    .then (Response => Response.json())
    .then(citiesFound => {
        console.log(citiesFound);
        let cityLat ;
        let cityLon ;
        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);
        cityLat = firstCity.lat;
    cityLon = firstCity.lon;
    let fiveDaysForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=db16dbee3bd66f2711c9afeee99393d6`;
    
    return fetch(fiveDaysForecastURL)
})

.then (Response => Response.json())
.then (city =>{
    console.log(city);
})
});