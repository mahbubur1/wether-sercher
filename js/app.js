const keyId = `e0d240188250cdcd1948a6a85f803fcd`

// function for event handler in search button 
const searchWeather = () =>{
    const searchCity = document.getElementById('location-name');
    const searchCityText = searchCity.value;
    // clear input 
    searchCity.value ="";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityText}&appid=${keyId}&units=metric`;
   fetch(url)
    .then(res => res.json())
    .then(data =>  displayWeather(data))
}

// set inner text 
const setInnerText = (id,text) =>{
    document.getElementById(id).innerText = text;
}
// weather show 
const displayWeather = temperature => {
    console.log(temperature);
    setInnerText('city-name',temperature.name);
}