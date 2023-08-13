// Function to fetch weather data using the fetch() API
async function fetchWeather(city) {
    const apiKey = "ENTER_API_KEY"; // Replace with actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Unable to fetch weather data");
    }
}

// Event handler for the "Get Weather" button
document.getElementById("getWeatherBtn").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;
    const weatherInfo = document.getElementById("weatherInfo");

    weatherInfo.textContent = "Fetching weather data...";

    try {
        const weatherData = await fetchWeather(city);
        weatherInfo.innerHTML = `
            <p>City: ${weatherData.name}</p>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Description: ${weatherData.weather[0].description}</p>
        `;
    } catch (error) {
        weatherInfo.textContent = "Error fetching weather data";
        console.error(error);
    }
});
