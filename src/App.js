import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Gallery from './components/Gallery';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import DetailsPage from './components/DetailsPage';
import { searchImages } from './api/pixabuy';
import { getWeather } from './api/openWeather';
import { useCache } from './hooks/useCache';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cache, addToCache, getFromCache } = useCache(20);

  const handleSearch = async (query) => {
    const cachedData = getFromCache(query);
    if (cachedData) {
      setImages(cachedData.images);
      setWeather(cachedData.weather);
      return;
    }

    setIsLoading(true);
    try {
      const [images, weather] = await Promise.all([
        searchImages(query),
        getWeather(query),
      ]);

      setImages(images);
      setWeather(weather);
      addToCache(query, { images, weather });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <div className="container-fluid mt-4">
          <Search onSearch={handleSearch} />
          {weather && <Weather weather={weather} />}
          <Routes>
            <Route path="/" element={<Gallery images={images} isLoading={isLoading} />} />
            <Route path="/details" element={<DetailsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;