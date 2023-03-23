import React from 'react'

const Notification = ({ message, errorMessage }) => {
    const notificationStyle = {
        color: 'mintcream',
        fontStyle: 'italic',
        fontSize: 16,
        width: '300px',
        backgroundColor: 'seagreen',
        textAlign: 'center',
        borderRadius: '25px'
    }

    const errorStyle = {
        color: 'mintcream',
        fontStyle: 'italic',
        fontSize: 16,
        width: '300px',
        backgroundColor: 'red',
        textAlign: 'center',
        borderRadius: '25px'
    }

    if (message === null) {
        return null
    } else if (errorMessage === true) {
        return (
            <div style={errorStyle}>
            <h2>{message}</h2>
         </div>
        )
    }

    return (
        <div style={notificationStyle}>
            <h2>{message}</h2>
        </div>
    )
}

export default Notification