import React from 'react'

import StarRating from "../starRating/StarRating"

import './Card.css'

export default function MovieCard({movieName,imageUrl}) {


    function post(description){
        //send the description, name and image of the movie to the database 
        
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
                    className="description"
                    placeholder="Any comments on the movie? (optional)"
                    name="description"
                    autoComplete="off"
                    />
                    <button 
                    type="submit" 
                    onClick={
                        post("body.description")
                    }>
                    Post</button>
                </form>
            </div>
        </div>
    )
}
