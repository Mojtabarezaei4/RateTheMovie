import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './StarRating.css'
function StarRating(){
    const [rating, setRating] = useState(null)

    return (
        <div>
            {/* making 10 stars */}
            {[...Array(10)].map((star, i) =>{
                const ratingValue = i+1
                
                return (
                <label>
                    <input 
                    type= "radio" 
                    name="rating" 
                    value={ratingValue}
                    onClick={() => setRating (ratingValue)} 
                    />
                    <FontAwesomeIcon className="stars" icon={faStar} />
                </label>
                )
            
            })}
            
        </div>
    )
}

export default StarRating
