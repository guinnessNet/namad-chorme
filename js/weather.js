const API_KEY = '62c108f891a56d99a8d998ac86056444';

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url).then(response => response.json().then(data =>{
    const weatherContainer = document.querySelector("#weather span:first-child");
    const cityContainer = document.querySelector("#weather span:last-child");
    weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    cityContainer.innerText = data.name;
  }))
}

function onGeoError(){
  alert("no weather for you")
}

const a = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)