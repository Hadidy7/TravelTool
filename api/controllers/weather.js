import axios from 'axios';

export const getWeatherByCity = async (req, res, next) => {
  try {
    const city = req.params.city;
    const apiKey = 'b737693c27e6434fa0a183032230907';

    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    const weatherData = response.data.current;

    // Extract the required information from the API response
    const weather = {
      temperature: weatherData.temp_c,
      condition: weatherData.condition.text,
      humidity: weatherData.humidity,
      // Include any other relevant weather information you need
    };

    // Send the weather data as the API response
    res.status(200).json(weather);
  } catch (err) {
    next(err);
  }
};
