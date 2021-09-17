document.getElementById('search').addEventListener('click', function(){
    getWeather();
})

function getWeather() {
    const apiKey = `89284f2573b239b4fc5e51d5493f7980`;
    const inputCity = document.getElementById('Input-city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            const statusIcon = data.weather[0].icon;
            document.getElementById("status-icon").src =`https://openweathermap.org/img/wn/${statusIcon}@2x.png`;
            const cityName = data.name;
            document.getElementById("city-name").innerText = cityName;
            const temperature = data.main.temp;
            document.getElementById("temperature").innerText = temperature;
            const status = data.weather[0].main;
            document.getElementById("status").innerText = status;
        })
        .catch(error => console.log(error));
}
