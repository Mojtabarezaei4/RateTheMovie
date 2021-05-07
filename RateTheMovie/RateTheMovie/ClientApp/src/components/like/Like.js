import React, { useState } from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"

import './Like.css'

function Like() {
    const [like , setLike] = useState(0)
    const [disLike , setDisLike] = useState(0)

    return (
        <div className="like-dislike">
            <div className="like">
                <p>{like}</p>
                <FontAwesomeIcon 
                icon={faThumbsUp}
                size="lg"
                onClick={() => setLike(like + 1)} 
                />
            </div>
            <div className="dis-like">
                <p>{disLike}</p>
                <FontAwesomeIcon 
                icon={faThumbsDown} 
                size="lg"
                onClick={() => setDisLike(disLike + 1)}
                />
            </div>
        </div>
    )
}

export default Like
