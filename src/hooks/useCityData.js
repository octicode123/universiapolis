import { useEffect, useState } from 'react';
import { getWeather } from '../api/openWeather';
import { searchImages } from '../api/pixabuy';

export const useCityData = (city) => {
  const [weather, setWeather] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getWeather(city);
        setWeather(weatherData);

        const imageData = await searchImages(city);
        setImages(imageData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return { weather, images, loading };
};