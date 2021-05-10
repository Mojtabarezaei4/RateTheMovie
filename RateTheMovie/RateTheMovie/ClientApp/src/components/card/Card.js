import React from 'react'

import StarRating from "../starRating/StarRating"
import Like from '../like/Like'

import './Card.css'
import './ResponsiveCard.css'

export default function Card({icon,userName,movieName,imageUrl,description}) {
    return (
        <div className="card-container">
            <div className="card-icon">
                <img src={icon} alt=""/>
            </div>
            <div className="userName">
                <h4>{userName}</h4>
            </div>
            <div className="movieName card-starRating">
                <h1>{movieName}</h1>
                <StarRating />
            </div>
            <div className="image-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
            <div className="like-disLike">
                <Like />
            </div>
        </div>
    )
}

