import React from 'react'


const CountrySmall = ({ country, setSearch }) => {
    return (
        <>
            <p>{country.name} <button onClick={() => setSearch(country.name)}>show</button></p>
        </>
    )
}


export default CountrySmall