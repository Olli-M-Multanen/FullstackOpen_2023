import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import WeatherScreen from './WeatherScreen'

const Country = ({ country, api_key}) => {

    const [weatherLoading, setWeatherLoading] = useState(true)
    const [weather, setWeather] = useState([])
    
    const lat = country.latlng[0]
    const lon = country.latlng[1]
  
    useEffect(() => {
      console.log('weather effect')
      axios
      .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
      .then(response => {
        console.log('weather promise fulfilled')
        setWeather(response.data)
        setWeatherLoading(false)
      })
    },[])
  
    if (weatherLoading) {
      return (
      <div>Loading data...</div>
      )
    }
  
    return (
      <>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <div>
        <p><b>languages:</b></p>
        <ul>
        {Object.keys(country.languages).map((key, i) => (
            <li key={i}>
              {country.languages[key]}
            </li>
        ))}
        </ul>
        <img src={country.flags.png} width="200px"></img>
      </div>
      <WeatherScreen weather={weather} country={country}/>
      </>
    )
  }
  
export default Country