import React, { useState } from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"

import './Like.css'

function Like() {
    const [like , setLike] = useState(null)
    const [disLike , setDisLike] = useState(null)

    return (
        <div>
            <FontAwesomeIcon className="like" icon={faThumbsUp} onClick={() => setLike(+1)} />
            <p>{like}</p>
            <FontAwesomeIcon icon={faThumbsDown} />
        </div>
    )
}

export default Like
