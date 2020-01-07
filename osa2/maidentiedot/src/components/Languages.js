import React from 'react'



const Languages = ({ languages }) => {
    const rows = () => languages.map(language => <li key={language.name}>{language.name}</li>)

    return (
        <ul>
            {rows()}
        </ul>
    )
}
export default Languages