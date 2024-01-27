
const API_KEY = "4b2e2b3c54ea46dea9c150138242701";
const search = document.querySelector('#search');
const form = document.querySelector('form');
const info = document.querySelector('#info')

form.addEventListener(
    'submit',
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)

const showWeather = (data) => {
    info.innerHTML = `
    <img src=${data.current.condition.icon} alt="">
    <h1>${data.current.temp_c}&deg;C</h1>
<div class="info" id="weather">
    <h2>${data.location.name}</h2>
    <h4>(${data.location.region},${data.location.country})</h4>
    <h3>${data.current.condition.text}</h3>
    <h3>humidity : ${data.current.humidity}</h3>
</div>
    `
}



const getWeather = async (city) => {
    url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
    return showWeather(data);
} 

getWeather();