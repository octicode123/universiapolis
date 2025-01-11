import axios from 'axios';

const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const weatherApi = axios.create({
  baseURL: WEATHER_BASE_URL,
  params: {
    units: 'metric', 
    APPID: '854ab1d2a662f9adc32a11f2f183ffb9', 
  },
});

/**
 * @param {string} city 
 * @returns {object}
 * @throws {Error} 
 */
export const getWeather = async (city) => {
  try {
    const response = await weatherApi.get('', { params: { q: city } });
    return response.data;
  } catch (error) {
    console.error('Weather API Error:', error);
    throw new Error(`Failed to fetch weather data for ${city}`);
  }
};