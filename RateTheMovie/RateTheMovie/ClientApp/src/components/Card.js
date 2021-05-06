import React from 'react'

import './Card.css'

function Card({icon,title,imageUrl,body}) {
    return (
        <div className="card-container">
            <div className="card-icon">
                <img src={icon} alt=""/>
            </div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="image-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Card
