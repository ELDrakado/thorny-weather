import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError('Could not fetch weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setError('Permission to access location was denied!');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);

      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return [loading, error, weather];
};