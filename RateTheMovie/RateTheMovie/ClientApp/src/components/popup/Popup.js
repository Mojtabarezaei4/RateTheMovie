import React from 'react'
import ReactDom from 'react-dom'

import './Popup.css'

export default function Popup({userName, trigger, setTrigger}) {
    return (trigger) ? ReactDom.createPortal(
        <>
        <div className="overlay-layer"/>
        <div className="popup">
            <div className="popup-inner">
                <h3>Friend request has sent to {userName}.</h3>
                <button 
                className="ok-btn" 
                onClick={ ()=> setTrigger(false)}
                
                >OK</button>
            </div>
        </div>
        </> , document.getElementById('portal')
    ) : "" 
}
