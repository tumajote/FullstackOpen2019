import React, { useState, useEffect } from 'react'
import Languages from './Languages'
import Axios from 'axios'




const Country = ({ country }) => {

    const weatherAPIKey = "e830f47667bdfe10bf578cc54f5a3162"
    const [weather, setWeather] = useState({
        location: {
            name: "",
        },
        current: {
            temperature: "",
            weather_icons: [
                ""
            ],
            weather_descriptions: [
                ""
            ],
            wind_speed: "",
            wind_dir: "",
        }
    })



    const weatherUrl = "http://api.weatherstack.com/current?access_key=" + weatherAPIKey + "&query=" + country.capital
    console.log(weatherUrl);
    useEffect(() => {
        Axios.get(weatherUrl)
            .then(response => {
                console.log(response.data)
                setWeather(response.data)
            })
    }, [weatherUrl])

    const Weather = ({ weather }) => (
        <>
            <h3>Weather in {weather.location.name}</h3>
            <p><b>temperature:</b> {weather.current.temperature} Celsius</p>
            <img src={weather.current.weather_icons[0]} alt='weatherIcon' />
            <p><b>wind:</b> {weather.current.wind_speed} kph direction {weather.current.wind_dir}</p>

        </>
    )

    return (
        <>
            <h2>{country.name}</h2>
            <p></p>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <p></p>
            <ul>
                <Languages languages={country.languages} />
            </ul>
            <img src={country.flag} alt='flag' width='200' />
            <Weather weather={weather} />

        </>)
}

export default Country