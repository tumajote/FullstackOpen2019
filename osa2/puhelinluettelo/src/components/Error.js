import React from 'react'

const Error =({message}) => {
    const notificationStyle = {
        color: 'White',
        fontStyle: 'bold',
        fontSize: 20,
        background: 'Red',
        padding: 10,
        margin: 10
      }
    


    if (message === null) {
        return null
    }

    return(
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Error