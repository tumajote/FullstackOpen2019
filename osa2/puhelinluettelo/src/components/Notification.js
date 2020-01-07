import React from 'react'

const Notification =({message}) => {
    const notificationStyle = {
        color: 'White',
        fontStyle: 'bold',
        fontSize: 20,
        background: 'black',
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

export default Notification