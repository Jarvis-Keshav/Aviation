// src/components/WeatherComponent.js
import React from "react";
import { Section } from "../Style";

function WeatherComponent({ weatherData }) {
  return (
    <Section>
      <h2>Weather Conditions</h2>
      <p>Temperature: {weatherData.temperature} °C</p>
      <p>Visibility: {weatherData.visibility} km</p>
      <p>Wind Speed: {weatherData.windSpeed} km/h</p>
    </Section>
  );
}

export default WeatherComponent;
