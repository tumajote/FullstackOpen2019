import React from 'react'

const Person = ({ person, deletePerson}) => (
    <tr>
      <td>
        {person.name}
      </td>
      <td>
        {person.number}
      </td>
      <td>
        <button onClick={deletePerson}>delete</button>
      </td>
    </tr>
  )

  export default Person