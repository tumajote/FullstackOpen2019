import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import Filter from './components/Filter'
import CountrySmall from './components/CountrySmall'
import Axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = countries.filter(country => new RegExp(search, "i").test(country.name))



  const content = () => {
    if (countriesToShow.length > 10) {
      return (
        <p>Too many matches, specify another filter</p>
      )
    } else if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
      return (countriesToShow.map(country =>
        <CountrySmall key={country.name} country={country} setSearch={setSearch} />
      ))
    } else if ((countriesToShow.length === 1)) {
      return (
        <Country country={countriesToShow[0]} />
      )
    } else {
      return (
        <p>No matches, specify another filter</p>
      )
    }
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      {content()}
    </div>
  )
}

export default App;
