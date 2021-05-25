import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './StarRating.css'

function StarRating(){
    {/* making rating state */}
    const [rating, setRating] = useState(null)
    {/* making hover state */}
    const [hover, setHover] = useState(null)

    return (
        <div>
            <p> {rating > 0 ? rating : "0"} / 10 </p>
            {/* making 10 stars */}
            {[...Array(10)].map((star, i) =>{
                {/* Setting the rating value to 1 instead for 0 */}
                const ratingValue = i+1
                
                return (
                <label>
                    <input 
                    type= "radio" 
                    name="rating" 
                    value={ratingValue}
                    onClick={() => rating > 0 ? rating : setRating (ratingValue)} 
                    />
                    <FontAwesomeIcon 
                    className="stars" 
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => rating > 0 ? rating : setHover(ratingValue)}
                    onMouseLeave={() => rating > 0 ? rating : setHover(null)}
                    icon={faStar} />
                </label>
                )
            })}
        </div>
    )
}

export default StarRating
