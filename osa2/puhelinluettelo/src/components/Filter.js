import React from 'react'

const Filter = ({ search, handleSearchChange }) => {
    return (<table>
        <tbody>
            <tr>
                <td>filter shown with</td>
                <td><input value={search} onChange={handleSearchChange} /></td>
            </tr>
        </tbody>
    </table >)
}

export default Filter

