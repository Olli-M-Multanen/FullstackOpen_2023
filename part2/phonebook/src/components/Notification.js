import React from 'react'

const Notification = ({ message }) => {
    const notificationStyle = {
        color: 'mintcream',
        fontStyle: 'italic',
        fontSize: 16,
        width: '300px',
        backgroundColor: 'seagreen',
        textAlign: 'center',
        borderRadius: '25px'
    }

    if (message === null) {
        return null
    }

    return (
        <div className='error' style={notificationStyle}>
            <h2>{message}</h2>
        </div>
    )
}

export default Notification