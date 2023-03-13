import React from 'react'

const WeatherScreen = ({weather, country}) => {
    const weatherIcon = weather.current.weather[0].icon
    const icon = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    return (
      <>
      <h2>Weather in {country.capital}</h2>
      <p>temperature {weather.current.temp} Celcius</p>
      <img src={icon} />
      <p>wind {weather.current.wind_speed} m/s</p>
      </>
    )
  }
  
export default WeatherScreen