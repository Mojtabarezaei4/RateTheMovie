import React from 'react'

import StarRating from "../starRating/StarRating"

import './Card.css'

export default function MovieCard({movieName,imageUrl}) {


    function post(){
        return ""
    }
    return (
        <div className="card-container" >
            <div className="movieName card-starRating">
                <h1>{movieName}</h1>
                <StarRating />
            </div>
            <div className="image-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className="card-description">
                <form className="movie" action="/movies">
                    <input 
                    type="text"
                    placeholder="Any comments on the movie? (optional)"
                    name="description"
                    autoComplete="off"
                    />
                    <button 
                    type="submit" 
                    onClick={
                    post()
                    }>
                    Post</button>
                </form>
            </div>
        </div>
    )
}
