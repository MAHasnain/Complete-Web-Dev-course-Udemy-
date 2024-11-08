document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.querySelector(".city-input");
  const weatherBtn = document.getElementById("get-weather-btn");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const weatherInfo = document.getElementById("weather-info");
  const errorMsg = document.getElementById("error-msg");

  const API_KEY = "d518e9ee91eade5b8836910a40eed10c";

  weatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  function showError() {
    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  }

  async function fetchWeatherData(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(URL);

    // console.log(response);

    if (!response.ok) {
      throw new Error("City not found.");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);

    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");

    const { name, main, weather } = data;

    cityName.textContent = name;
    temperature.textContent = `Temperature : ${main.temp}`;
    description.textContent = `description : ${weather[0].main}`;
  }
});
