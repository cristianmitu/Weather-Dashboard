// let cityLat ;
// let cityLon ;
let cityChosen ="London";
let iconSRC = " http://openweathermap.org/img/wn/10d@2x.png"; // ${iconCode}


let geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityChosen}&limit=5&appid=db16dbee3bd66f2711c9afeee99393d6`;
//let fiveDaysForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=db16dbee3bd66f2711c9afeee99393d6`;
// trebuiesc mutate in event



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
    //console.log(firstCity.lon);
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=db16dbee3bd66f2711c9afeee99393d6`)
})

 .then (Response => Response.json())
 .then (data =>{
     console.log(data);
 })