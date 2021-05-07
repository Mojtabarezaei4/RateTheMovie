import React from 'react'

import StarRating from "./StarRating";

import './Card.css'


function Card({icon,userName,movieName,imageUrl,body}) {
    return (
        <div className="card-container">
            <div className="card-icon">
                <img src={icon} alt=""/>
            </div>
            <div className="userName">
                <h4>{userName}</h4>
            </div>
            <div className="card-starRating">
                <StarRating size={100}/>
            </div>
            <div className="movieName">
                <h1>{movieName}</h1>
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
