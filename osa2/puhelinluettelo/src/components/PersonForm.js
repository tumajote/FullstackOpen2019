import React from 'react'

const PersonForm = ({ newName, newNumber,addNumber, handleNameChange, handleNumberChange }) => {
    return (
        <form onSubmit={addNumber}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            name:
              </td>
                        <td>
                            <input value={newName} onChange={handleNameChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            number:
              </td>
                        <td>
                            <input value={newNumber} onChange={handleNumberChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit">add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>

    )
}


export default PersonForm