"use client"
import React, { useState, useEffect } from 'react';

const OpenWeatherApi = () => {
  // OpenWeatherMap API key and URL
  const apiKey = '036415f5e07e87135785dcc0f82f5e8b';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

  // State to store weather data
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);

  // Fetch weather data from OpenWeatherMap API
  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTemperature(data.main.temp);
        setDescription(data.weather[0].description);
        setLocation(data.name);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [apiUrl]); // Dependency array added to avoid unnecessary API calls

  // Display loading message while fetching data
  if (!temperature || !description || !location) {
    return <div>Loading weather data...</div>;
  }

  // Display weather information
  return (
    <div className='bg-slate-400 rounded-md m-auto text-slate-950'>
      <p>Temperature in {location}: {temperature}&#8451;C</p>
      <p>Weather: {description}</p>
    </div>
  );
};

export default OpenWeatherApi;
